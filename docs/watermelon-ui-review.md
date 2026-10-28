# Watermelon UI candidates for FormulaSnap

Reviewed 27 October 2026 against the compact React/Tauri app and its approved
Frosted shell. The first three patterns were approved and recreated on 28 October 2026.
See [implementation and REA evidence](recreated-components.md). The remaining
rows are recommendations.

| Priority | Candidate | Where it fits | Adaptation needed |
| --- | --- | --- | --- |
| First | [Copy Confirm](https://ui.watermelon.sh/animated-components/copy-confirm) | Brief “Copied” feedback on the existing Copy button | Extract the button feedback only. Keep FormulaSnap's clipboard error handling, reset timers on unmount, retain a text confirmation for assistive technology and respect reduced motion. |
| First | [Continuous Tabs](https://ui.watermelon.sh/animated-components/continuous-tabs) | A single sliding selection behind All formulae, Formula booklet and Exam extras | Keep the controlled collection state and existing query/favorites. Add appropriate keyboard and selected-state semantics; the example's buttons alone do not supply a complete accessible tab pattern. Fit three visible labels at 360px and avoid its opaque track. |
| First | [Combobox 2](https://ui.watermelon.sh/components/combobox) | Searchable topic picker, grouped by Pure, Further Pure, Mechanics and Statistics when viewing all subjects | Retain the existing subject/topic filtering rules and “All topics”. The current four-option Subject select can stay native. Bound the list to the window and test keyboard/focus/scroll interaction in WKWebView. |
| Next | [Collapsible 4](https://ui.watermelon.sh/components/collapsible), informed by [Expand Details](https://ui.watermelon.sh/animated-components/expand-details) | Formula variables, notes and source reference beneath each result | Prefer the accessible collapsible primitive with a short height transition. Avoid Expand Details' demo's fixed-width morph and full-screen wrapper: long equations need the complete row width. Preserve Space-to-expand and Enter-to-copy. |
| Next | [Switch](https://ui.watermelon.sh/components/switch) | Reduce transparency and Always on Top | Preserve native checkbox semantics, visible focus and the existing preferences. Match the frosted surface and keep the whole setting label tappable. |
| Later | [Sonner 5/7](https://ui.watermelon.sh/components/sonner) | Dismissible nonessential feedback and asynchronous update status | Reserve for short messages. An available restart and persistent update failures must remain visible in Settings. Avoid covering formula rows in a 520px window. |
| Web only | [Sheet 1](https://ui.watermelon.sh/components/sheet) | A mobile Settings/filter drawer while the formula library stays underneath | Bottom-opening layout on phones, focus return, Escape and internal scrolling. Adds little value inside the compact native window. |

## Candidates to defer

- [Adaptive Slider](https://ui.watermelon.sh/animated-components/adaptive-slider):
  its native range input is useful, but the calorie-specific colour changes and
  number animation add little to a 0–40px blur preference. The new native range
  control already gives live feedback, a precise value and a 9px reset.
- Knob Slider, floating docks, morphing discovery bars and swipe stacks consume
  space or hide controls FormulaSnap users need while solving a question.
- [Tooltip 1/8](https://ui.watermelon.sh/components/tooltip) can supplement icon
  labels and shortcut hints; required source references and units stay visible
  because hover is unavailable on iPhone.

## Integration and source review

FormulaSnap currently uses plain CSS and has no Tailwind, shadcn, Radix, Motion
or icon library dependency. Watermelon examples assume Tailwind/shadcn and often
Motion. Copying an entire example would bring demo wrappers, extra dependencies
and opaque default surfaces into the app. Adopt the useful behaviour and keep
the existing glass tokens; add a primitive only where its accessibility and
interaction handling justify it.

The official registry endpoint returned HTTP 403 in this environment. The
published component pages and the official
[registry repository](https://github.com/WatermelonCorp/watermellon-registry)
were accessible. Source inspection of `copy-confirm-base.tsx`,
`continuous-tabs-base.tsx`, `expand-details-base.tsx` and
`adaptive-slider-base.tsx` informed the cautions above. Some published pages
name `motion/react` while their current base source imports `framer-motion`;
resolve the actual import/dependency at adoption time rather than installing
both. Watermelon publishes these examples under MIT; retain applicable notices
when copying code.

My suggested order: Copy Confirm, Continuous Tabs, then the searchable topic
picker. These improve actions people already perform, without reshaping the
approved Frosted shell.
