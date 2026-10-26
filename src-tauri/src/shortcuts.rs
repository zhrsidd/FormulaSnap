use serde::{Deserialize, Serialize};
use std::{
    fs,
    path::{Path, PathBuf},
    sync::Mutex,
};
use tauri::{AppHandle, Manager, State};
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Modifiers, Shortcut};

pub const DEFAULT_SHORTCUT: &str = "Super+Shift+KeyY";

#[derive(Clone, Serialize, Deserialize)]
pub struct ShortcutSettings {
    pub shortcut: String,
    #[serde(skip_deserializing)]
    pub warning: Option<String>,
}

pub struct ShortcutPreferences {
    pub settings: ShortcutSettings,
    pub active: Option<Shortcut>,
    path: PathBuf,
}

fn parse(value: &str) -> Result<Shortcut, String> {
    let shortcut: Shortcut = value
        .parse()
        .map_err(|_| "Choose a valid key combination.".to_string())?;
    if !shortcut
        .mods
        .intersects(Modifiers::SUPER | Modifiers::CONTROL | Modifiers::ALT)
    {
        return Err("Include Command, Control or Option in your shortcut.".into());
    }
    Ok(shortcut)
}

fn write_settings(path: &Path, shortcut: Shortcut) -> Result<(), String> {
    fs::create_dir_all(path.parent().ok_or("Missing settings directory")?)
        .map_err(|e| e.to_string())?;
    let temp = path.with_extension("tmp");
    let settings = ShortcutSettings {
        shortcut: shortcut.into_string(),
        warning: None,
    };
    fs::write(
        &temp,
        serde_json::to_vec(&settings).map_err(|e| e.to_string())?,
    )
    .map_err(|e| e.to_string())?;
    fs::rename(temp, path).map_err(|e| e.to_string())
}

// Register first: an unavailable new binding must never remove the working one.
fn replace(
    old: Option<Shortcut>,
    next: Shortcut,
    register: impl Fn(Shortcut) -> Result<(), String>,
    unregister: impl Fn(Shortcut) -> Result<(), String>,
    persist: impl Fn(Shortcut) -> Result<(), String>,
) -> Result<(), String> {
    if old == Some(next) {
        return persist(next);
    }
    register(next).map_err(|e| {
        format!("That shortcut could not be registered. Try another combination. ({e})")
    })?;
    if let Err(error) = persist(next) {
        let cleanup = unregister(next).err();
        return Err(format!(
            "Could not save shortcut: {error}{}",
            cleanup
                .map(|e| format!("; cleanup failed: {e}"))
                .unwrap_or_default()
        ));
    }
    if let Some(previous) = old {
        if let Err(error) = unregister(previous) {
            let restore = persist(previous).err();
            let cleanup = unregister(next).err();
            return Err(format!("Could not replace the previous shortcut: {error}; settings rollback: {restore:?}; shortcut cleanup: {cleanup:?}"));
        }
    }
    Ok(())
}

pub fn initialize(app: &AppHandle) -> Result<ShortcutPreferences, String> {
    let path = app
        .path()
        .app_config_dir()
        .map_err(|e| e.to_string())?
        .join("shortcut.json");
    let (requested, mut warning) = match fs::read(&path) {
        Ok(bytes) => match serde_json::from_slice::<ShortcutSettings>(&bytes)
            .ok()
            .filter(|s| parse(&s.shortcut).is_ok())
        {
            Some(saved) => (saved.shortcut, None),
            None => (
                DEFAULT_SHORTCUT.into(),
                Some("Saved shortcut settings were invalid. Using the default shortcut.".into()),
            ),
        },
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => {
            (DEFAULT_SHORTCUT.into(), None)
        }
        Err(_) => (
            DEFAULT_SHORTCUT.into(),
            Some("Could not read the saved shortcut. Using the default shortcut.".into()),
        ),
    };
    let desired = parse(&requested)?;
    let default = parse(DEFAULT_SHORTCUT)?;
    let active = if app.global_shortcut().register(desired).is_ok() {
        Some(desired)
    } else if desired != default && app.global_shortcut().register(default).is_ok() {
        warning = Some("Your saved shortcut is unavailable. The default shortcut is active; choose another in Settings.".into());
        Some(default)
    } else {
        warning = Some("The shortcut is unavailable. Open FormulaSnap from Applications and choose another shortcut here.".into());
        None
    };
    Ok(ShortcutPreferences {
        settings: ShortcutSettings {
            shortcut: active.unwrap_or(desired).into_string(),
            warning,
        },
        active,
        path,
    })
}

#[tauri::command]
pub async fn get_shortcut(
    preferences: State<'_, Mutex<ShortcutPreferences>>,
) -> Result<ShortcutSettings, String> {
    Ok(preferences
        .lock()
        .map_err(|e| e.to_string())?
        .settings
        .clone())
}

#[tauri::command]
pub async fn set_shortcut(
    app: AppHandle,
    preferences: State<'_, Mutex<ShortcutPreferences>>,
    shortcut: String,
) -> Result<ShortcutSettings, String> {
    let next = parse(&shortcut)?;
    let mut prefs = preferences.lock().map_err(|e| e.to_string())?;
    replace(
        prefs.active,
        next,
        |key| {
            app.global_shortcut()
                .register(key)
                .map_err(|e| e.to_string())
        },
        |key| {
            app.global_shortcut()
                .unregister(key)
                .map_err(|e| e.to_string())
        },
        |key| write_settings(&prefs.path, key),
    )?;
    prefs.active = Some(next);
    prefs.settings = ShortcutSettings {
        shortcut: next.into_string(),
        warning: None,
    };
    Ok(prefs.settings.clone())
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::cell::RefCell;

    #[test]
    fn requires_a_command_control_or_alt_modifier() {
        for value in ["KeyY", "Shift+KeyY", "invalid", "Super+"] {
            assert!(parse(value).is_err());
        }
        for value in [
            DEFAULT_SHORTCUT,
            "Control+Alt+Space",
            "Super+Digit1",
            "Alt+F8",
        ] {
            assert!(parse(value).is_ok());
        }
    }

    #[test]
    fn conflict_keeps_the_previous_shortcut_and_settings() {
        let old = parse(DEFAULT_SHORTCUT).unwrap();
        let next = parse("Super+Shift+KeyU").unwrap();
        let result = replace(
            Some(old),
            next,
            |_| Err("in use".into()),
            |_| panic!("must retain old binding"),
            |_| panic!("must retain saved preference"),
        );
        assert!(result.unwrap_err().contains("Try another"));
    }

    #[test]
    fn successful_change_registers_then_persists_then_removes_old() {
        let old = parse(DEFAULT_SHORTCUT).unwrap();
        let next = parse("Control+Alt+Space").unwrap();
        let events = RefCell::new(Vec::new());
        replace(
            Some(old),
            next,
            |k| {
                events.borrow_mut().push(("register", k));
                Ok(())
            },
            |k| {
                events.borrow_mut().push(("unregister", k));
                Ok(())
            },
            |k| {
                events.borrow_mut().push(("persist", k));
                Ok(())
            },
        )
        .unwrap();
        assert_eq!(
            *events.borrow(),
            vec![("register", next), ("persist", next), ("unregister", old)]
        );
    }

    #[test]
    fn persistence_failure_removes_new_binding_without_removing_old() {
        let old = parse(DEFAULT_SHORTCUT).unwrap();
        let next = parse("Control+Alt+Space").unwrap();
        let removed = RefCell::new(Vec::new());
        assert!(replace(
            Some(old),
            next,
            |_| Ok(()),
            |k| {
                removed.borrow_mut().push(k);
                Ok(())
            },
            |_| Err("disk full".into())
        )
        .is_err());
        assert_eq!(*removed.borrow(), vec![next]);
    }

    #[test]
    fn warning_is_returned_to_the_settings_ui() {
        let settings = ShortcutSettings {
            shortcut: DEFAULT_SHORTCUT.into(),
            warning: Some("Shortcut unavailable".into()),
        };
        let response = serde_json::to_value(settings).unwrap();
        assert_eq!(response["warning"], "Shortcut unavailable");
    }

    #[test]
    fn unregister_failure_restores_saved_settings_and_removes_new_binding() {
        let old = parse(DEFAULT_SHORTCUT).unwrap();
        let next = parse("Control+Alt+Space").unwrap();
        let saved = RefCell::new(Vec::new());
        let removed = RefCell::new(Vec::new());
        assert!(replace(
            Some(old),
            next,
            |_| Ok(()),
            |k| {
                removed.borrow_mut().push(k);
                if k == old {
                    Err("OS error".into())
                } else {
                    Ok(())
                }
            },
            |k| {
                saved.borrow_mut().push(k);
                Ok(())
            },
        )
        .is_err());
        assert_eq!(*saved.borrow(), vec![next, old]);
        assert_eq!(*removed.borrow(), vec![old, next]);
    }

    #[test]
    fn settings_round_trip_across_restart() {
        let dir =
            std::env::temp_dir().join(format!("formulasnap-shortcut-test-{}", std::process::id()));
        let path = dir.join("shortcut.json");
        let key = parse("Control+Alt+Space").unwrap();
        write_settings(&path, key).unwrap();
        let saved: ShortcutSettings = serde_json::from_slice(&fs::read(&path).unwrap()).unwrap();
        assert_eq!(parse(&saved.shortcut).unwrap(), key);
        fs::remove_dir_all(dir).unwrap();
    }
}
