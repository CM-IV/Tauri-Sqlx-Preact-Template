// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use utils::db::init_db;

mod utils;

// Tauri commands defined here
// List them in the 'tauri::generate_handler![]' macro
#[tauri::command]
fn greet() -> String {
    format!("Hello world!")
}

fn main() {
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
