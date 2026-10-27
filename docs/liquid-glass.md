# FormulaSnap glass appearance

The desktop uses Apple's native `NSGlassEffectView` clear style through
`window-vibrancy` 0.8.1. A separate `NSVisualEffectView` with behind-window
blending sits below the glass, sampling the desktop rather than leaving the
lens over an empty transparent window. This ordering matters: Tauri's simple
liquid-glass-or-vibrancy fallback chooses one material, so it does not provide
both layers. The dependency was already in Cargo.lock; only the app's direct
dependency was added, with no transitive version updates.

On macOS 15 and earlier, the unsupported Liquid Glass version is handled and
the HUD vibrancy layer remains. Platform-specific code is compiled only on
macOS. A material failure is logged without preventing formula search.

The HTML panel uses a dark translucent tint and a fine highlight at its rim.
Cards remain mostly clear, selection uses a cool translucent tint, and controls
have a small specular edge. No opaque grey panel or opaque selected-card fill
covers the material. The window uses a dark appearance for its white text.
The large shell does not respond to pointer movement or run continuous motion.

Settings has an optional opaque reading surface. CSS also responds to
`prefers-reduced-transparency`, `prefers-contrast` and `prefers-reduced-motion`;
the native materials retain their system accessibility behaviour. Formulae
keep their existing responsive 12px minimum and horizontal-scroll fallback.
Browser surfaces use CSS transparency and subtle stationary background colour;
they do not claim to reproduce Apple's native optics.

## Research

- [Apple: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/): lensing, layered materials, adaptation and appropriate use of glass.
- [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass): prioritise content, avoid excessive glass layers, and test accessibility settings.
- [Apple: Materials](https://developer.apple.com/design/human-interface-guidelines/materials): material hierarchy and legibility.
- [Tauri window-vibrancy](https://github.com/tauri-apps/window-vibrancy): the native clear effect, OS availability and behind-window vibrancy implementation.
- [Anthropic frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design): installed globally with the Skills CLI and used for restrained hierarchy, intentional styling and screenshot-based critique. The initially indexed OpenAI liquid-glass skill was unavailable in its repository, so it was not used.

## Verification

- All formulae pass KaTeX's strict renderer, and formula IDs remain unique.
- Tests cover the extras filter, its source reference, favorites across
  collections and persistence of the readability setting.
- The native Rust shortcut suite passes, and the macOS app builds locally.
- Browser inspection renders all exam extras together with zero KaTeX errors;
  at 360px there is no document or card overflow and equation text stays at
  least 12px. Long equations retain their own scroll fallback.
- Native window review checks the real app material, search, filter and Settings.
  A first clear-only preview exposed insufficient contrast over a bright
  backdrop; the final native composition adds a desktop-sampling backdrop
  beneath the lens. Local preview version overrides are never committed or
  installed as the user's release.
