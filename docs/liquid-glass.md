# FormulaSnap Frosted shell

The user selected Frosted shell from the three-design comparison on 27 October
2026, preferring 9px backdrop blur. The app now uses one frosted shell with the
approved 42% navy tint, 38% rim highlight, a soft top highlight and quiet
translucent content rows. The previous fixed-radius native Liquid Glass and HUD
stack has been replaced so its optical treatment does not override the chosen
blur value. Typography, search, formulae, favorites and shortcut behaviour are
preserved.

## Blur and persistence

Settings → Appearance → Background blur is a native range input from 0–40px,
starting at 9px. It applies live, displays its numeric value, persists locally
under `formulasnap-background-blur`, and has a reset to 9px. Invalid saved values
fall back to 9px; finite out-of-range values are clamped. Reduce transparency
uses a solid reading surface, disables the slider and preserves its value for
when transparency is restored.

On macOS, `appearance.rs` applies a per-window WindowServer blur radius, on
AppKit's main thread. It uses the same `CGSMainConnectionID` /
`CGSSetWindowBackgroundBlurRadius` ABI used by
[winit 0.30.12](https://github.com/rust-windowing/winit/blob/v0.30.12/src/platform_impl/macos/ffi.rs).
These are non-public Apple APIs: symbols are resolved dynamically and a missing
symbol or failure falls back to AppKit HUD vibrancy. Settings explicitly reports
system-managed blur in that case. This dependency on a non-public macOS API can
break on a future OS and is unsuitable for a Mac App Store submission; this app
is distributed through its existing signed-updater GitHub release pipeline.

The native call checks macOS Reduce Transparency and Increase Contrast. The
frontend also follows the matching CSS media queries and re-applies preferences
when those signals change. The native effect never blurs formula text or
captures screenshots of other applications. The web library and comparison demo
use CSS backdrop filtering; their pixels will differ from native WindowServer
blur even at the same nominal radius.

## Verification

- 27 frontend tests pass, including blur default, live CSS application,
  persistence, reset, invalid preferences and the readability toggle.
- 7 native shortcut tests pass; native code checks and the local release app
  compiles. Local updater artifact signing requires the CI-only private key;
  the local app bundle is available for visual verification without it.
- Native UI verified at 9px, then 20px, with Reduce transparency on/off and
  restored to 9px. No fallback or application error was reported in Settings.
- The public iPhone comparison keeps all three treatments, starts at 9px for a
  new visit and includes a blur slider inside preview Settings. Saved demo
  appearance choices remain respected.

## References

- [Apple: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)
- [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
- [Apple: Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [Tauri window-vibrancy](https://github.com/tauri-apps/window-vibrancy)
- [Anthropic frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
- [Watermelon UI review and shortlist](watermelon-ui-review.md)
