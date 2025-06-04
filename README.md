# Tauri Desktop Application Template

This is a template for creating a Tauri desktop application using modern web technologies, namely SolidJS.

![oceanus app](https://i.postimg.cc/KvGYN8Zc/oceanus-app.png)

## Features

- **Tauri v2**: The latest version of Tauri, providing improved performance and new features.
- **TailwindCSS & DaisyUI**: Modern CSS frameworks for styling your application, replacing the previous BulmaCSS setup.
- **No Specta Type Generation**: For now, Typescript type generation is not included. I may look for an alternative in the future.
- **SQLx Database Integration**: The backend utilizes SQLx for database interactions with a SQLite database.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/tauri-template.git
    cd tauri-template
    ```

2. Install dependencies:
    ```sh
    pnpm install
    ```

3. Start the development server:
    ```sh
    pnpm tauri dev
    ```

## Project Structure

The project structure is organized as follows:

- `src-tauri/`: Contains Tauri-specific code, including database setup and logic.
- `src/`: Contains the frontend code.
- `public/`: Contains static assets.

## Configuration

### Tauri Configuration

The Tauri configuration file is located at `src-tauri/tauri.conf.json`. You can customize this file to fit your needs.

## Database Setup (SQLite & SQLx)

This application uses SQLite as its database, managed through the SQLx Rust crate.  Here's how it works:

- **Database Location:** The database file (`data.db`) is stored within a dedicated directory created in the user’s configuration folder (`~/.config/oceanus-tauri-app`).
- **Initialization:** The `init_db()` function (located in `src-tauri/src/utils/db.rs`) handles database initialization:
    - It creates the necessary directory if it doesn't exist.
    - It establishes a connection to the SQLite database using SQLx.
    - It runs any pending database migrations defined in the `./src/utils/migrations` directory.
- **Accessing the Database:**  The `get_db()` function provides access to the shared `SqlitePool` instance, allowing you to execute queries from your Rust backend code.

## Building the Application

To build the application for production, run:

```sh
pnpm tauri build
```

This will create a distributable version of your Tauri desktop application.

### Additional Information

For more information about Tauri, visit the [official Tauri documentation](https://tauri.app/start).

For more information about TailwindCSS, visit the [official TailwindCSS documentation](https://tailwindcss.com/docs).

For more information about DaisyUI, visit the [official DaisyUI documentation](https://daisyui.com/docs/install/).

For more information about SQLx, visit the [official SQLx documentation](https://github.com/launchbadge/sqlx).
