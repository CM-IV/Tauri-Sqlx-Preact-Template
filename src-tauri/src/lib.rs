use utils::db::init_db;

mod utils;

// Tauri commands defined here
// List them in the 'tauri::generate_handler![]' macro
#[tauri::command]
fn greet() -> String {
    format!("Hello world!")
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|_| {
            tauri::async_runtime::spawn(async {
                init_db().await;
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
