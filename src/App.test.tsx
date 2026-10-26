// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("@tauri-apps/api/core", () => ({ isTauri: () => false, invoke: vi.fn() }));

beforeEach(() => {
  localStorage.clear();
  vi.stubGlobal("ResizeObserver", class { observe() {} disconnect() {} });
  HTMLElement.prototype.scrollIntoView = vi.fn();
});
afterEach(cleanup);

it("browses General without a query and retains search and favorites", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open Settings" }));
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "Physics" } });
  fireEvent.change(screen.getAllByRole("combobox")[1], { target: { value: "General" } });
  fireEvent.click(screen.getByRole("button", { name: "Done" }));
  expect(screen.getAllByRole("group")).toHaveLength(20);
  expect(screen.getByRole("heading", { name: "General" })).toBeTruthy();
  expect(screen.getByRole("group", { name: "Work Done" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Add Work Done to favorites" }));
  expect(screen.getByRole("heading", { name: "Favorites" })).toBeTruthy();
  expect(screen.getByRole("heading", { name: "General" })).toBeTruthy();
  expect(screen.getAllByRole("group")).toHaveLength(20);
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "work done" } });
  expect(screen.getByRole("group", { name: "Work Done" })).toBeTruthy();
  expect(screen.queryByRole("button", { name: "Check for updates" })).toBeNull();
});

it("migrates saved Further Pure topic names and explains the source's empty Decision 1 topic", () => {
  localStorage.setItem("formulasnap-subject", "Further Mathematics");
  localStorage.setItem("formulasnap-topic", "FPM1");
  render(<App />);
  expect(screen.getByRole("group", { name: "Newton–Raphson Iteration" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Open Settings" }));
  expect((screen.getAllByRole("combobox")[0] as HTMLSelectElement).value).toBe("Further Mathematics");
  const topics = screen.getAllByRole("combobox")[1];
  expect(Array.from((topics as HTMLSelectElement).options).map(o => o.value)).toEqual(["All", "Further Pure 1", "Further Pure 2", "Further Pure 3", "Decision 1"]);
  fireEvent.change(topics, { target: { value: "Decision 1" } });
  fireEvent.click(screen.getByRole("button", { name: "Done" }));
  expect(screen.getByText(/lists no required formulae/)).toBeTruthy();
});

it("browses the web library in pages without stealing initial focus", () => {
  render(<App />);
  expect(screen.getAllByRole("group")).toHaveLength(24);
  expect(document.activeElement).not.toBe(screen.getByRole("textbox"));
  expect(HTMLElement.prototype.scrollIntoView).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole("button", { name: /Show more formulae/ }));
  expect(screen.getAllByRole("group")).toHaveLength(48);
  expect(fireEvent.keyDown(screen.getByRole("textbox"), { key: " ", code: "Space" })).toBe(true);
  fireEvent.change(screen.getByRole("combobox", { name: "Subject" }), { target: { value: "Further Mathematics" } });
  expect(screen.getAllByRole("group")).toHaveLength(24);
  expect(screen.getByRole("combobox", { name: "Topic" })).toBeTruthy();
});
