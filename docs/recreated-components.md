# Frosted shell controls

Implemented 28 October 2026 after the user selected Watermelon UI's Copy Confirm,
Continuous Tabs and grouped Combobox patterns.

## Appearance

The single shell retains its existing system typography and layout. The palette
is navy `#0c131e` at 32% opacity (the demo's 42% base minus 10 percentage points),
white `#f7f9ff` for equations, `#c3ccda` for supporting labels and `#bddaff` for
keyboard focus. Decorative outer borders, top gradients and inset rim highlights
are removed. These correspond to tint adjustment −10% and edge highlight 0 in
the comparison. The 9px default blur, live Settings slider, persistence and solid
reading mode remain intact. Cards and focus indicators retain their boundaries.

## Recreated interactions

- **Copy Confirm:** a button-local check and “Copied” label only after the actual
  clipboard write succeeds, clearing after 1.8 seconds. Pending writes cannot
  be duplicated. Cleanup removes the timer; failures use the existing alert.
  The keyboard copy-and-hide shortcut remains intact.
- **Continuous Tabs:** one selection pill moves between the existing collection
  filters with the reference's spring constants (380 stiffness, 30 damping,
  0.9 mass). Controlled state preserves the current search, topic and saved
  formulae. Toggle-button semantics, a labelled toolbar and roving keyboard
  focus support Left/Right, Home and End. Reduced motion makes changes immediate.
- **Grouped topic picker:** an editable combobox with grouped options, search,
  a selected check, an empty state and a portalled list. It supports pointer and
  keyboard selection, active-descendant announcements, Escape without closing
  Settings, outside press and Tab dismissal. The popup fits above or below its
  field and follows viewport/keyboard resize. All subjects can now filter by a
  specific topic. The short Subject selector stays native.

On phones the collection labels fit at 320px, subject/topic fields use full rows,
and touch controls have larger targets. The web app runs the actual components:
[Try the formula library](https://zhrsidd.github.io/FormulaSnap/#library).

## REA investigation

The live reference HTML was accessible, but its shipped asset endpoint returned
HTTP 403. The investigation therefore uses Watermelon's installable registry
packages published in the official repository, extracted as inert local package
artifacts. REA's `analyze_javascript_application` parsed all three selected TSX
files without parse failures: 11,283 source bytes and 1,317 AST nodes. This is
static package evidence, not an observation of the live site's execution.
External primitive implementations and runtime behaviour remain outside that
analysis; the relationship graph explicitly reports partial/unknown coverage.

Parent evidence:
`ev_7113271f0831b09e0c3dd122f8041d9502f1ba34eac871dcb84734d740117c32`.
Summary evidence:
`ev_9db091c1ebbbe0a042d66adeca052d623e773519d95cf8c2411fc1c54396b17d`.
A complete local evidence bundle and package URL/SHA-256 manifest are retained
under `outputs/watermelon-rea/`; raw investigation assets are not app runtime
content. The recreated controls use Motion from `motion/react`, not two competing
Motion packages, and use FormulaSnap CSS rather than importing demo screens.
See [third-party notice](../THIRD_PARTY_NOTICES.md).

Reference packages:

- [Copy Confirm registry](https://github.com/WatermelonCorp/watermellon-registry/blob/main/public/r/copy-confirm.json)
- [Continuous Tabs registry](https://github.com/WatermelonCorp/watermellon-registry/blob/main/public/r/continuous-tabs.json)
- [Grouped Combobox registry](https://github.com/WatermelonCorp/watermellon-registry/blob/main/public/r/combobox-2.json)

## Validation

33 frontend tests cover existing formula behaviour and the new copy outcome,
timer cleanup, topic search/selection/dismissal, collection keyboard movement,
and persisted topic selection across subjects and collections. The production
frontend build and all 7 native shortcut tests pass. Browser checks include
actual clipboard success, grouped topic selection, no KaTeX errors, zero console
errors and no horizontal overflow at 390px and 320px. Native WKWebView checks confirm topic selection, popup placement, clipboard
confirmation and collection filtering. Signed release installation is verified
through the existing updater workflow.
