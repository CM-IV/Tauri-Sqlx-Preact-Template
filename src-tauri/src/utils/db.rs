use std::sync::OnceLock;

use camino::Utf8PathBuf;
use sqlx::SqlitePool;

static DATABASE: OnceLock<SqlitePool> = OnceLock::new();

// Use this function with SQLX queries
pub fn get_db() -> &'static SqlitePool {
    DATABASE.get().unwrap()
}

pub async fn init_db() {
    let path = get_db_path();

    if !path.exists() {
        std::fs::create_dir_all(&path).unwrap();
    }

    let database_url = format!("sqlite:{path}/data.db?mode=rwc");

    let pool = SqlitePool::connect(&database_url).await.unwrap();

    sqlx::migrate!("./src/utils/migrations")
        .run(&pool)
        .await
        .unwrap();

    DATABASE.set(pool).unwrap();
}

fn get_db_path() -> Utf8PathBuf {
    let config_dir = dirs::config_dir().expect("Couldnt get path to the config");
    let mut path = Utf8PathBuf::from_path_buf(config_dir).unwrap();
    path.push("oceanus-tauri-app");

    path
}
