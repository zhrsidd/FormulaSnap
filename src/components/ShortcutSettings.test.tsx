// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { ShortcutSettings } from "./ShortcutSettings";
import { DEFAULT_SHORTCUT } from "../lib/shortcuts";

const { invoke } = vi.hoisted(() => ({ invoke: vi.fn() }));
vi.mock("@tauri-apps/api/core", () => ({ invoke }));
beforeEach(() => {
  vi.resetAllMocks();
  invoke.mockResolvedValue({ shortcut: DEFAULT_SHORTCUT, warning: null });
});
afterEach(cleanup);

async function open() {
  await act(async () => { render(<ShortcutSettings />); });
}
function record() {
  fireEvent.click(screen.getByRole("button", { name: "Change shortcut" }));
  return screen.getByRole("button", { name: "Press shortcut…" });
}

it("captures a combination and only changes the active shortcut after Save", async () => {
  await open();
  const button = record();
  fireEvent.keyDown(button, { key: "u", code: "KeyU", metaKey: true, shiftKey: true });
  expect(screen.getByLabelText("New shortcut").textContent).toBe("⌘ ⇧ U");
  expect(invoke).toHaveBeenCalledTimes(1);
  invoke.mockResolvedValueOnce({ shortcut: "Super+Shift+KeyU", warning: null });
  await act(async () => { fireEvent.click(screen.getByRole("button", { name: "Save shortcut" })); });
  expect(invoke).toHaveBeenLastCalledWith("set_shortcut", { shortcut: "Super+Shift+KeyU" });
  expect(screen.getByText(/Current shortcut:/).textContent).toContain("⌘ ⇧ U");
});

it("keeps the current shortcut visible when native registration fails", async () => {
  await open();
  fireEvent.keyDown(record(), { key: "u", code: "KeyU", ctrlKey: true, altKey: true });
  invoke.mockRejectedValueOnce("That shortcut is already in use.");
  await act(async () => { fireEvent.click(screen.getByRole("button", { name: "Save shortcut" })); });
  expect(screen.getByRole("alert").textContent).toContain("already in use");
  expect(screen.getByText(/Current shortcut:/).textContent).toContain("⌘ ⇧ Y");
  expect(screen.getByRole("button", { name: "Save shortcut" })).toBeTruthy();
});

it("rejects unmodified keys and supports Escape and Cancel without saving", async () => {
  await open();
  const button = record();
  fireEvent.keyDown(button, { key: "y", code: "KeyY" });
  expect(screen.getByRole("alert").textContent).toContain("Use Command");
  fireEvent.keyDown(button, { key: "Escape", code: "Escape" });
  expect(screen.queryByRole("button", { name: "Press shortcut…" })).toBeNull();
  fireEvent.keyDown(record(), { key: "1", code: "Digit1", altKey: true });
  fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
  expect(screen.queryByLabelText("New shortcut")).toBeNull();
  expect(invoke).toHaveBeenCalledTimes(1);
});

it("resets the shortcut through the same native registration path", async () => {
  invoke.mockResolvedValueOnce({ shortcut: "Control+Alt+Space", warning: "Using a fallback shortcut." });
  await open();
  expect(screen.getByRole("status").textContent).toContain("fallback");
  await act(async () => { fireEvent.click(screen.getByRole("button", { name: "Reset to default" })); });
  expect(invoke).toHaveBeenLastCalledWith("set_shortcut", { shortcut: DEFAULT_SHORTCUT });
});
