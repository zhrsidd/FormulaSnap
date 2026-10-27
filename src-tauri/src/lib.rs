use std::sync::Mutex;
use tauri::Manager;
use tauri_plugin_global_shortcut::ShortcutState;
mod appearance;
mod shortcuts;
use tauri::Emitter;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
#[tauri::command]
fn set_always_on_top(window: tauri::WebviewWindow, enabled: bool) {
    let _ = window.set_always_on_top(enabled);
}
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler(move |app, triggered_shortcut, event| {
                    let is_active = app
                        .try_state::<Mutex<shortcuts::ShortcutPreferences>>()
                        .is_some_and(|preferences| {
                            preferences
                                .try_lock()
                                .map(|prefs| prefs.active.as_ref() == Some(triggered_shortcut))
                                .unwrap_or(false)
                        });
                    if event.state() == ShortcutState::Pressed && is_active {
                        println!("GLOBAL SHORTCUT FIRED");

                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.unminimize();
                            let _ = window.show();
                            let _ = window.set_focus();
                            let _ = app.emit("formulasnap-opened", ());
                        }
                    }
                })
                .build(),
        )
        .invoke_handler(tauri::generate_handler![
            set_always_on_top,
            appearance::set_backdrop_blur,
            shortcuts::get_shortcut,
            shortcuts::set_shortcut
        ])
        .setup(move |app| {
            // Apply the approved Frosted shell at 9px until the frontend restores
            // the user's saved preference. No fixed-radius lens above the blur.
            #[cfg(target_os = "macos")]
            if let Some(window) = app.get_webview_window("main") {
                if let Err(error) = appearance::apply(&window, 9, false) {
                    eprintln!("Could not apply window backdrop: {error}");
                }
            }
            app.handle()
                .plugin(tauri_plugin_updater::Builder::new().build())?;
            app.handle().plugin(tauri_plugin_process::init())?;
            app.manage(Mutex::new(shortcuts::initialize(app.handle())?));
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
