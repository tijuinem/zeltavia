#[cfg(target_os = "windows")]
fn ensure_desktop_shortcut() {
    use std::env;
    use std::path::PathBuf;
    use std::process::Command;

    if let Ok(exe_path) = env::current_exe() {
        if let Some(user_profile) = env::var_os("USERPROFILE") {
            let desktop_shortcut = PathBuf::from(&user_profile).join("Desktop").join("Zeltavia.lnk");
            if !desktop_shortcut.exists() {
                let exe_str = exe_path.to_string_lossy().replace('\'', "''");
                let lnk_str = desktop_shortcut.to_string_lossy().replace('\'', "''");
                let ps_script = format!(
                    "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('{}'); $s.TargetPath = '{}'; $s.IconLocation = '{},0'; $s.Description = 'Zeltavia - Curso de Inglés'; $s.Save()",
                    lnk_str, exe_str, exe_str
                );
                let _ = Command::new("powershell")
                    .args(["-NoProfile", "-NonInteractive", "-WindowStyle", "Hidden", "-Command", &ps_script])
                    .status();
            }
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[cfg(target_os = "windows")]
    ensure_desktop_shortcut();

    let builder = tauri::Builder::default()
        .plugin(tauri_plugin_shell::init());

    #[cfg(desktop)]
    let builder = builder.on_permission_request(|_webview, permission| {
        match permission {
            tauri::webview::PermissionKind::Microphone => tauri::webview::PermissionResponse::Allow,
            _ => tauri::webview::PermissionResponse::Default,
        }
    });

    builder
        .run(tauri::generate_context!())
        .expect("error while running Zeltavia application");
}

