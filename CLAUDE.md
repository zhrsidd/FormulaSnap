# Claude instructions for FormulaSnap

## What this is

FormulaSnap is a small macOS utility for students: press a global shortcut (`⌘ ⇧ Y` by default), type a few
letters, and copy a Maths or Physics formula. The whole product is "shortcut → search → formula → copy",
so speed, keyboard control and correct formulas matter more than features. It works offline and uses no AI
at run time.

The same React code also runs as a public website (<https://zhrsidd.github.io/FormulaSnap/>) with a
landing page, a Mac download section and the full formula library.

The library covers Edexcel International A Level Mathematics, Further Mathematics and Physics. Students
revise from it, so **a wrong formula, unit or condition is the worst defect this project can have.**

## How it is built

- **Tauri 2 (Rust) + React 19 + TypeScript (strict) + Vite 8.** Search is Fuse.js; equations render with
  KaTeX; `motion` drives the one moving selection pill. Plain CSS, no Tailwind, no component library.
- **One codebase, two targets.** `isTauri()` in `src/App.tsx` decides at run time. Desktop builds go to
  `dist/` with base `/`; the web build (`--mode web`) goes to `dist-web/` with base `/FormulaSnap/`, so
  neither can overwrite the other. Window controls, Always on Top and the global shortcut are desktop-only
  and hidden in the browser.
- **The library is TypeScript data** in `src/data/`. Each `Formula` has a stable `id`, `name`, `subject`,
  `topic`, a plain-text `formula` (what gets copied), `latex` (what is drawn), `aliases`, `variables` with
  units, and optional `notes`, `booklet` page and `examKnowledge`.
- **State is `localStorage`** under `formulasnap-*` keys: favourites, recents, subject and topic filters,
  blur, reduce transparency. Favourites and recents store formula IDs.
- **Native code** in `src-tauri/src/`: `shortcuts.rs` (global shortcut registration and validation, with
  tests), `appearance.rs` (window blur through a non-public macOS API, resolved dynamically, with a
  fallback to system vibrancy), `lib.rs` (commands and plugins).
- **Updates.** The Tauri updater installs signed releases from GitHub Releases.

**Every push to `main` ships to users.** `.github/workflows/release.yml` builds a signed universal macOS
app on each push to `main` and publishes it as the latest release, which installed copies download and
install automatically. `.github/workflows/pages.yml` redeploys the website on the same push. There is no
staging step between `main` and every user's Mac.

## Folder map

| Path | Contents |
| --- | --- |
| `src/App.tsx`, `src/App.css` | The whole app shell: search, results, keyboard handling, favourites, recents, settings, blur |
| `src/components/` | `BrowserSite` (web landing page), `CollectionTabs`, `CopyConfirm`, `TopicPicker`, `ShortcutSettings`, `AppUpdates`, `FormulaEquation`, each with a test beside it |
| `src/BrowserSite.css` | Styles for the web landing page only |
| `src/data/formulas.ts` | The `Formula` type and the main library; merges the two files below |
| `src/data/pearsonFormulas.ts` | 154 cards from the Pearson IAL Mathematics Formula Book, each with its printed page |
| `src/data/examFormulae.ts` | 100 "Exam extras" cards plus annotations for 13 existing M1 cards |
| `src/data/formulas.test.ts` | Counts, ID uniqueness, KaTeX rendering of every card, search and sourcing rules |
| `src/lib/shortcuts.ts` | Shortcut parsing and formatting shared with the settings UI |
| `src-tauri/` | Rust source, `tauri.conf.json` (base version, updater public key), `capabilities/`, icons |
| `scripts/` | `release-version.mjs` (derives the release version in CI), `generate-exam-formulae.mjs` (writes `docs/exam-formulae.md` from the data) |
| `docs/` | `pearson-formula-coverage.md`, `exam-formulae.md` (generated), `liquid-glass.md` (shell design and verification), `recreated-components.md`, `watermelon-ui-review.md` |
| `public/` | Static files for the web build, including the glass comparison demo |
| `assets/` | README screenshots |

## Commands

```sh
npm ci
npm run dev            # browser development, http://localhost:1420 (strict port)
npm run tauri dev      # the desktop app (needs Rust and Tauri's macOS prerequisites)

npx tsc --noEmit       # typecheck
npm test               # Vitest: 9 files, 33 tests
npx vitest run src/data/formulas.test.ts    # one file
npm run build          # desktop frontend -> dist/
npm run build:web      # website -> dist-web/
npm run preview:web    # then open the printed URL with /FormulaSnap/ appended
npm run tauri build    # desktop bundle

cargo test --manifest-path src-tauri/Cargo.toml --locked --lib   # native shortcut tests (macOS)
node scripts/generate-exam-formulae.mjs      # regenerate docs/exam-formulae.md after changing exam extras
```

`scripts/release-version.test.mjs` is a Vitest test and runs as part of `npm test`; `node --test` cannot
run it. There is no lint script. The release workflow runs `npm ci`, `npm test` and the cargo tests before building.

## Formula data rules

1. **Never change or reuse an existing `id`.** Favourites and recents on users' machines store IDs. Fix a
   card in place; add new cards with new IDs. A test checks uniqueness.
2. **Check every formula against its source** before adding or editing: the Pearson formula booklet, the
   specification, or a past paper. Record where it came from (`booklet.page`, the `examKnowledge.section`,
   or the note). If you cannot check it, say so instead of adding it.
3. **`formula` and `latex` must say the same thing.** `formula` is the plain text that is copied; `latex`
   is what is shown. Every `latex` string must render in KaTeX with `throwOnError` (a test runs all of them).
4. **Variables carry names and units.** State model restrictions and conditions in `notes` (for example
   "no tied ranks", "x > a"). A formula without its condition is a wrong formula.
5. **Keep the three collections honest.** Pearson booklet cards have no `examKnowledge`. A formula printed
   in the booklet or specification must not be labelled `derived-not-printed`. Numerical lookup tables are
   excluded. Decision 1 has no supplied formulae and the topic says so.
6. **Counts are asserted** (154 booklet cards, 100 exam extras, 13 annotated M1 cards, 20 General physics
   cards, 12 exam-extra topics). When you add or remove cards on purpose, update the test, the README
   figures and the coverage document in the same change, and regenerate `docs/exam-formulae.md`.
7. **Topic names are saved filter values.** Renaming a topic needs a migration of the saved value, as the
   `FPM1` → `Further Pure 1` mapping in `App.tsx` does.
8. FormulaSnap is not affiliated with Pearson Edexcel. Do not copy booklet text beyond the equations, and
   keep the disclaimer.

## Coding rules

1. **Guard every native call.** Anything from `@tauri-apps/*` or `invoke` runs only when `isDesktop` is
   true; the web build must work with none of it.
2. **Keyboard behaviour is the product.** `↑`/`↓` move, `Space` expands, `Enter` copies (and hides the
   window on desktop), `Esc` closes Settings first and then hides. Do not break or rebind these. New
   controls need full keyboard support and correct ARIA roles (toolbar with roving focus, combobox with
   active descendant).
3. **"Copied" appears only after the clipboard write resolves.** Failures use the existing alert. Clear
   timers on unmount.
4. **`localStorage` can fail or hold junk.** Wrap reads and writes, validate what comes back, clamp
   numbers, and fall back to the default, as the blur preference does.
5. **Keep the base version in `src-tauri/tauri.conf.json` moving forward only.** CI adds the workflow run
   number to the patch. Raise the minor or major for a new series; never lower it or reset the counter.
6. **Never commit the updater private key.** The public key in `tauri.conf.json` must keep matching the
   `TAURI_SIGNING_PRIVATE_KEY` secret, or installed copies can no longer update.
7. **Rust changes need the cargo tests and a real launch on macOS.** `appearance.rs` calls a non-public
   API on the main thread; keep the dynamic symbol lookup and the fallback.
8. **No new dependency without a clear need.** The app must stay small and instant.
9. Match the existing style: one large `App.tsx`, small focused components with a test beside each, plain
   CSS classes. Do not split or restructure files as part of another change.

## Design rules

`docs/liquid-glass.md` and `docs/recreated-components.md` record the approved design. The owner chose it
from a side-by-side comparison; do not restyle it unasked.

- **One Frosted shell.** Navy `#0c131e` tint, 9 px background blur by default (adjustable 0 to 40 px in
  Settings, saved, with a reset), no decorative outer border, top gradient or rim highlight. Cards and
  focus indicators keep their boundaries.
- **Palette.** White `#f7f9ff` for equations, `#c3ccda` for supporting labels, `#bddaff` for keyboard
  focus. No new accent colours.
- **Typography** is the system font stack. Equations are KaTeX.
- **Three recreated interactions,** reused rather than duplicated: `CopyConfirm` (check and "Copied" for
  1.8 s), `CollectionTabs` (one pill moving with spring 380 / 30 / 0.9), `TopicPicker` (grouped,
  searchable, portalled combobox).
- **Preferences are respected.** Reduce transparency gives a solid reading surface and disables the blur
  slider without losing its value. Reduced motion makes changes immediate. Increased contrast has its own
  fallback. Follow both the Settings toggle and the CSS media queries.
- **Text is never blurred.** Blur is behind the shell only.
- **Phones.** The web library fits at 320 px, with full-width fields and larger touch targets.
- The window is transparent: `html`, `body` and `#root` keep `background: transparent`. In the desktop
  app, scrolling stays inside the results list, not the webview.

## Mistakes a weaker model makes here, and how to avoid each

| Mistake | Why it is wrong here | Do this instead |
| --- | --- | --- |
| Pushing or merging to `main` to "save progress" | It publishes a signed build that every installed copy installs automatically | Work on a branch; `main` only when the owner asks and every check passes |
| Writing a formula from memory | A sign, a factor or a missing condition misleads revision | Check the source, cite the page or section, state the conditions |
| Renaming an `id` to match a new naming scheme | Users' favourites and recents silently disappear | Keep the ID; change the name |
| Adding cards without updating the counts | `formulas.test.ts` fails, or worse, someone "fixes" the number without checking | Update test, README and coverage document together |
| Editing `docs/exam-formulae.md` by hand | It is generated from the data | Run `scripts/generate-exam-formulae.mjs` |
| Putting LaTeX in `formula` or plain text in `latex` | One is copied, the other rendered | Fill both and check they agree |
| Calling a Tauri API without the `isDesktop` guard | The website crashes | Guard it and test in the browser build |
| Running `npm run build` and assuming the website is fine | The web build is a different mode, base path and output directory | Run `npm run build:web` too |
| Adding a hard-coded `/` asset path | Breaks under `/FormulaSnap/` on GitHub Pages | Import assets or use the Vite base |
| Showing "Copied" optimistically | The clipboard can be refused, especially in browsers | Wait for the write to resolve |
| Restyling the shell, adding borders, glow or a new accent | The look was chosen by the owner from a comparison | Keep the documented values |
| Adding an animation without a reduced-motion path | Ignores a stated accessibility rule | Make it immediate under reduced motion |
| Trusting a saved preference | Old or corrupt values exist in the wild | Validate, clamp, fall back |
| Lowering or resetting the version | The updater treats the build as older and never installs it | Only raise the base version |
| Replacing the updater public key or committing the private key | Existing installs can never update again, or the key leaks | Leave signing alone |
| Claiming the native blur or shortcut "works" from a Linux or browser run | Rust and macOS behaviour was not exercised | Say which checks ran; native verification is a Mac launch |
| Adding analytics, a network call or an AI feature | The app is local, offline and has no runtime AI | Do not add them |

## How to work here

1. Start with `git status`; read the code you will change and its test.
2. For formula work, open the source document first and note the page or section.
3. Make the smallest change that does the job. Add or update the test beside the component or data file.
4. Run the checks yourself and report what they printed, and what could not be run on this machine.
5. Commit to a working branch. Because `main` releases to users, never push there without being asked.

## Before saying a task is done

- [ ] `git status` shows only the files this task should touch; `dist/`, `dist-web/` and `src-tauri/target/` are not staged.
- [ ] `npx tsc --noEmit` passes.
- [ ] `npm test` passes; the report gives the totals.
- [ ] `npm run build` and `npm run build:web` both pass.
- [ ] Formula data changed: each formula checked against its source and cited; `formula` and `latex`
      agree; variables, units and conditions present; no existing ID changed; counts updated in the test,
      README and `docs/pearson-formula-coverage.md`; `docs/exam-formulae.md` regenerated.
- [ ] UI changed: works in the browser build and at 320 px; every keyboard control still works; reduced
      motion, reduce transparency and increased contrast still have their fallbacks.
- [ ] Rust or `tauri.conf.json` changed: cargo tests run on macOS and the app launched, or the report says
      plainly that this was not done.
- [ ] Version, updater key and release workflow untouched unless the task was about them.
- [ ] The change is on a branch, not `main`, unless the owner asked for a release.
- [ ] The report says what changed, what ran with its result, and what was not verified.
