import { expect, it } from "vitest";
import { formatShortcut, shortcutFromEvent } from "./shortcuts";
it("records physical keys consistently across shifted keyboard characters", () => {
  expect(shortcutFromEvent({ code: "Digit1", metaKey: true, ctrlKey: false, altKey: false, shiftKey: true })).toBe("Super+Shift+Digit1");
  expect(formatShortcut("shift+super+KeyY")).toBe("⇧ ⌘ Y");
  expect(shortcutFromEvent({ code: "ShiftLeft", metaKey: true, ctrlKey: false, altKey: false, shiftKey: true })).toBeNull();
});
