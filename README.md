# [Tauri](https://tauri.app) + [Preact](https://preactjs.com) + [Bulma CSS](https://bulma.io/) + [TypeScript](https://typescriptlang.org) + [Sqlx](https://github.com/launchbadge/sqlx) + [Specta](https://github.com/oscartbeaumont/specta) + [Vite](https://vitejs.dev) Starter

**Template Made By:**
*[Oceanus Digital](https://home.civdev.xyz/)*

[![Rust](https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=#E57324)](https://github.com/AR10Dev/tauri-solid-ts-tailwind-vite)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://AR10Dev/tauri-solid-ts-tailwind-vite)

![](/public/image.png)

A starter template for [Tauri](https://tauri.app) + [Preact](https://preactjs.com/) App that comes preconfigured with [Vite](https://vitejs.dev),
[TypeScript](https://typescriptlang.org), [Bulma CSS](https://bulma.io/), [Sqlx](https://github.com/launchbadge/sqlx) and HMR.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [just](https://marketplace.visualstudio.com/items?itemName=kokakiwi.vscode-just) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) + [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) + [Sqlite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer) + [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) + [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

## Features

- 🤩 [Tauri](https://tauri.app) - Build smaller, faster, and more secure desktop and mobile applications with a web frontend.

- ⚡️ [Preact](https://preactjs.com) & [Vite](https://vitejs.dev) - Fast 3kB alternative to React with the same modern API

- 👍 [Sqlx](https://github.com/launchbadge/sqlx) - The Rust SQL Toolkit with compile-time checked queries without a DSL.

- 🎨 [Bulma CSS](https://tailwindcss.com) - A CSS framework that provides ready-to-use frontend components.

- 💪 [TypeScript](https://typescriptlang.org) - It's JavaScript with syntax for types.

- 😤 [Specta](https://github.com/oscartbeaumont/specta) - Easily export your Rust types to other languages (TypeScript)

## Getting started

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/CM-IV/Tauri-Sqlx-Preact-Template/generate)

### Note
For Tauri use you need to Setup your environment following this [guide](https://tauri.app/guides/getting-started/prerequisites)

## Checklist

When you use this template, follow the checklist to update your info properly

- [ ] Rename `name`, `version` and `author` field in `package.json`
- [ ] Rename `name`, `version`, `description`, `authors` and `repository` field in `src-tauri/Cargo.toml`
- [ ] Change the author name in `LICENSE`
- [ ] Clean up the READMEs
- [ ] Enjoy 😉

## Usage

### Development

```bash
npm run dev # or pnpm dev or yarn dev
```

Runs the app in the development mode.

This template uses the [just](https://just.systems/) command runner.  Please ensure that the paths to your local `~/.config` directory are edited within the `justfile` and within the `db.rs` Rust file.

For database migrations, this repositiory works best with the [DbMate](https://github.com/amacneil/dbmate) cli database migrations tool, and is configured via the `justfile` commands to utilize this.  However, an `init` migrations file has already been created for you - on first startup a folder containing the Sqlite database within your `~/.config` directory is created.

The first time you run this command, it will take several minutes for the Rust package manager to download and build all the required packages. Since they are cached, subsequent builds will be much faster, as only your added code will need rebuilding.

If you make edits to the page in the webview should update automatically just like a browser will reload.
When you make edits to the Rust files, they will be rebuilt automatically and your app will restart.

### Build

```bash
npm run build # or pnpm build or yarn build
```

Builds Preact to the `dist` folder and after will embed it into a single binary with your Rust code.<br>
The binary itself will be located in `src-tauri/target/release/[app name]`, and installers will be located in `src-tauri/target/release/bundle/`<br>

Like the `dev` command, the first time you run this, it will take some time to collect the Rust crates and build everything - but on subsequent runs it will only need to rebuild your code, which is much quicker.<br>

It correctly bundles Preact in production mode and optimizes the binary for the best performance.<br>

🎉 Congratulations, your app is ready to be release!

## Custom App Icon
To generate your custom app icon you can follow this [guide](https://tauri.app/guides/features/icons).<br>
Your new app icons will be located in `src-tauri/icons/` and remeber to update the `icon` field in `src-tauri/tauri.conf.json` with all your new icon path name.<br>

## Customize the tauri.conf.json

To modify and personalize your app, you need to modify `src-tauri/tauri.conf.json` by following this [guide](https://tauri.app/api/config)