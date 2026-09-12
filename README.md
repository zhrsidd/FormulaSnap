# FormulaSnap

A fast, lightweight macOS formula search utility for students.

FormulaSnap lets you instantly search Maths and Physics formulas from anywhere on your Mac using a global keyboard shortcut. Search by formula name, topic, variable, unit, or related terms, then copy the formula without interrupting your workflow.

## ✨ Features

- ⚡ Open FormulaSnap from anywhere with `⌘ ⇧ Y`
- 🔎 Fast fuzzy formula search
- 📐 Maths and Physics formula library
- 🧮 Proper mathematical notation using KaTeX
- ⌨️ Keyboard-first navigation
- 📋 Press Enter to instantly copy a formula
- ⭐ Save frequently used formulas as Favorites
- 🕘 Quickly access recently copied formulas
- 📖 Expand formulas to view variables, units, and additional notes
- 🎯 Filter formulas by subject and topic
- 🪟 Optional Always on Top mode
- 💾 Favorites, recents, filters, and settings are stored locally
- 🚫 No internet connection or AI required at runtime

## 🚀 How It Works

Press:

`⌘ ⇧ Y`

from anywhere on macOS to bring up FormulaSnap.

Start typing to search the formula library. FormulaSnap searches across formula names, aliases, topics, variables, units, and other metadata.

### Keyboard Controls

| Key | Action |
| --- | --- |
| `⌘ ⇧ Y` | Open FormulaSnap |
| `↑` / `↓` | Navigate results |
| `Space` | Expand/collapse formula details |
| `Enter` | Copy selected formula |
| `Esc` | Close/hide FormulaSnap |

## 🔍 Search

FormulaSnap uses fuzzy searching, so you don't need to remember the exact name of a formula.

For example, searches such as:

```text
kinetic energy
acceleration
SUVAT
electric field
quadratic
standard deviation
```

can be used to quickly find relevant formulas.

## 📚 Formula Library

FormulaSnap currently contains formulas covering Edexcel International A Level Mathematics and Physics.

### Physics

- Unit 1 — Mechanics and Materials
- Unit 2 — Waves and Electricity
- Unit 4 — Further Mechanics, Fields and Particles
- Unit 5 — Thermodynamics, Radiation, Oscillations and Cosmology

### Mathematics

- Pure Mathematics 1
- Pure Mathematics 2
- Pure Mathematics 3
- Mechanics 1
- Mechanics 2
- Statistics 1
- Statistics 2

Formula entries can include:

- Formula name
- Mathematical expression
- Search aliases
- Variables
- Units
- Topic
- Subject
- Additional notes

## 🛠 Built With

FormulaSnap is built using:

- **React** — interface
- **TypeScript** — frontend logic
- **Tauri 2** — desktop application framework
- **Rust** — native application functionality
- **Fuse.js** — fuzzy searching
- **KaTeX** — mathematical equation rendering

The formula library is stored locally, meaning searching does not require an internet connection.

## 💻 Running FormulaSnap Locally

### Requirements

You'll need:

- Node.js
- npm
- Rust
- Tauri's macOS prerequisites

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd FormulaSnap
```

Install the dependencies:

```bash
npm install
```

Start FormulaSnap in development mode:

```bash
npm run tauri dev
```

## 📦 Building

To create a production build:

```bash
npm run tauri build
```

Tauri will generate the macOS application and installer under:

```text
src-tauri/target/release/bundle/
```

The generated `.app` can be found under `macos/`, while the `.dmg` installer is generated under `dmg/`.

## 🔒 Privacy

FormulaSnap is designed to work locally.

Formula searches, favorites, recent formulas, and settings do not need to be sent to an external server.

There is no AI model running in the application and no internet connection is required to search the formula library.

## 🎯 Why I Built FormulaSnap

When studying Maths and Physics, finding a specific formula can be surprisingly disruptive. Formula sheets are useful, but locating the exact equation you need often means opening another document, scrolling through pages, or searching online.

FormulaSnap was built to make that process almost instantaneous.

The goal is simple:

> **Shortcut → search → formula → copy.**

FormulaSnap stays out of the way until you need it.

## 🗺️ Future Ideas

Possible future improvements include:

- More subjects and exam boards
- User-created custom formulas
- Editable formula collections
- Additional keyboard shortcuts
- Improved formula discovery
- Windows support
- Automatic update support

## 🧑‍💻 Development

FormulaSnap was created as part of Hack Club's Stardance.

AI tools were used during development to assist with tasks including structuring formula data, debugging, and parts of the Tauri/Rust setup. The application itself does not use AI at runtime.

## ⚠️ Disclaimer

FormulaSnap is an independent study tool and is not affiliated with, endorsed by, or an official product of Pearson Edexcel.

Formula data should always be checked against the official specification and formula sheets for your course.

## 📄 License

License information will be added before public distribution.