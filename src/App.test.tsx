// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("@tauri-apps/api/core", () => ({ isTauri: () => false, invoke: vi.fn() }));

beforeEach(() => {
  localStorage.clear();
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
