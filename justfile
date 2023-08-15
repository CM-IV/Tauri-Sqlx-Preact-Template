dev:
    pnpm tauri dev

build:
    pnpm tauri build

db-create:
    dbmate -u sqlite:/home/charlie/.config/oceanus-tauri-app/data.db create

db-new:
    dbmate -u sqlite:/home/charlie/.config/oceanus-tauri-app/data.db -d ./src-tauri/src/utils/migrations new init