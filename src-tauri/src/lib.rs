use tauri::Manager;
use tauri_plugin_global_shortcut::{Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState};
use tauri::Emitter;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
#[tauri::command]
fn set_always_on_top(window: tauri::WebviewWindow, enabled: bool) {
    let _ = window.set_always_on_top(enabled);
}
pub fn run() {
    let shortcut = Shortcut::new(
        Some(Modifiers::SUPER | Modifiers::SHIFT),
        Code::KeyY,
    );

    tauri::Builder::default()
        .plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler(move |app, triggered_shortcut, event| {
                    if triggered_shortcut == &shortcut
                        && event.state() == ShortcutState::Pressed
                    {
                        println!("GLOBAL SHORTCUT FIRED");

                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                            let _ = app.emit("formulasnap-opened", ());
                        }
                    }
                })
                .build(),
        )
        .invoke_handler(tauri::generate_handler![
            set_always_on_top
        ])
        .setup(move |app| {
            app.global_shortcut().register(shortcut)?;
            println!("GLOBAL SHORTCUT REGISTERED");
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}