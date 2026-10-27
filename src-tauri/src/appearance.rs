// Adjustable WindowServer blur replaces the fixed-radius Liquid Glass stack.
// Resolve these non-public symbols at runtime: future macOS versions can fall
// back to AppKit vibrancy without preventing the app from opening.
#[cfg(target_os = "macos")]
pub fn apply(window: &tauri::WebviewWindow, radius: u32, reduce: bool) -> Result<String, String> {
    use objc2::{msg_send, runtime::AnyObject};
    use objc2_app_kit::{NSWindow, NSWorkspace};
    use std::{ffi::c_void, sync::OnceLock};
    use window_vibrancy::{
        apply_vibrancy, clear_vibrancy, NSVisualEffectMaterial, NSVisualEffectState,
    };

    type Connection = unsafe extern "C" fn() -> *mut AnyObject;
    type Blur = unsafe extern "C" fn(*mut AnyObject, isize, i64) -> i32;
    static SYMBOLS: OnceLock<Option<(Connection, Blur)>> = OnceLock::new();
    let symbols = SYMBOLS.get_or_init(|| unsafe {
        let connection = libc::dlsym(libc::RTLD_DEFAULT, c"CGSMainConnectionID".as_ptr());
        let blur = libc::dlsym(
            libc::RTLD_DEFAULT,
            c"CGSSetWindowBackgroundBlurRadius".as_ptr(),
        );
        if connection.is_null() || blur.is_null() {
            None
        } else {
            Some((
                std::mem::transmute::<*mut c_void, Connection>(connection),
                std::mem::transmute::<*mut c_void, Blur>(blur),
            ))
        }
    });
    let workspace = NSWorkspace::sharedWorkspace();
    // Called on AppKit's main thread by setup or the command's dispatch below.
    let system_reduce: bool =
        unsafe { msg_send![&*workspace, accessibilityDisplayShouldReduceTransparency] };
    let contrast: bool =
        unsafe { msg_send![&*workspace, accessibilityDisplayShouldIncreaseContrast] };
    let reduced = reduce || system_reduce || contrast;
    let native = window.ns_window().map_err(|error| error.to_string())?;
    let native = unsafe { &*native.cast::<NSWindow>() };
    let window_number = native.windowNumber();
    let _ = clear_vibrancy(window);
    if let Some((connection, blur)) = symbols {
        let status = unsafe {
            blur(
                connection(),
                window_number,
                if reduced { 0 } else { radius.min(40) as i64 },
            )
        };
        if status == 0 {
            return Ok(if reduced { "reduced" } else { "adjustable" }.into());
        }
        eprintln!("WindowServer blur returned {status}; using AppKit material");
    }
    if reduced {
        return Ok("reduced".into());
    }
    apply_vibrancy(
        window,
        NSVisualEffectMaterial::HudWindow,
        Some(NSVisualEffectState::Active),
        Some(26.0),
    )
    .map_err(|error| error.to_string())?;
    Ok("system".into())
}

#[tauri::command]
pub async fn set_backdrop_blur(
    window: tauri::WebviewWindow,
    radius: u32,
    reduce_transparency: bool,
) -> Result<String, String> {
    if radius > 40 {
        return Err("Background blur must be between 0 and 40px".into());
    }
    #[cfg(target_os = "macos")]
    {
        let (sender, mut receiver) = tauri::async_runtime::channel(1);
        let target = window.clone();
        window
            .run_on_main_thread(move || {
                let _ = sender.try_send(apply(&target, radius, reduce_transparency));
            })
            .map_err(|error| error.to_string())?;
        receiver
            .recv()
            .await
            .ok_or("Backdrop update was interrupted")?
    }
    #[cfg(not(target_os = "macos"))]
    {
        let _ = (window, reduce_transparency);
        Ok("system".into())
    }
}
