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

it("filters exam extras, shows provenance, and keeps favorites across collections", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Exam extras" }));
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "projectile range" } });
  expect(screen.getByRole("group", { name: "Projectile Range on Level Ground" })).toBeTruthy();
  expect(screen.queryByRole("group", { name: "SUVAT — Final Velocity" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Expand Projectile Range on Level Ground" }));
  expect(screen.getByRole("link", { name: /Pearson IAL specification/ }).getAttribute("href")).toContain("Mathematics/2018/");
  expect(fireEvent.keyDown(screen.getByRole("link", { name: /Pearson IAL specification/ }), { key: "Enter" })).toBe(true);
  expect(screen.getByText(/equal launch and landing heights/)).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Add Projectile Range on Level Ground to favorites" }));
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "" } });
  expect(screen.getByRole("heading", { name: "Favorites" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "All formulae" }));
  expect(screen.getByRole("button", { name: "Remove Projectile Range on Level Ground from favorites" })).toBeTruthy();
});

it("persists the readability setting without changing collection preferences", () => {
  const { unmount } = render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open Settings" }));
  fireEvent.click(screen.getByRole("checkbox", { name: "Reduce transparency" }));
  expect(localStorage.getItem("formulasnap-reduce-transparency")).toBe("true");
  expect(document.querySelector(".panel.reduce-transparency")).toBeTruthy();
  unmount();
  render(<App />);
  expect(document.querySelector(".panel.reduce-transparency")).toBeTruthy();
});

it("starts Frosted shell at 9px, applies blur live, persists it, and restores the default", () => {
  const { unmount } = render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open Settings" }));
  const slider = screen.getByRole("slider", { name: "Background blur" }) as HTMLInputElement;
  expect(slider.value).toBe("9");
  fireEvent.change(slider, { target: { value: "21" } });
  expect(document.querySelector<HTMLElement>(".panel")?.style.getPropertyValue("--background-blur")).toBe("21px");
  expect(localStorage.getItem("formulasnap-background-blur")).toBe("21");
  fireEvent.click(screen.getByRole("checkbox", { name: "Reduce transparency" }));
  expect(slider.disabled).toBe(true);
  unmount();
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open Settings" }));
  expect((screen.getByRole("slider") as HTMLInputElement).value).toBe("21");
  fireEvent.click(screen.getByRole("checkbox", { name: "Reduce transparency" }));
  expect((screen.getByRole("slider") as HTMLInputElement).disabled).toBe(false);
  fireEvent.click(screen.getByRole("button", { name: "Reset to 9px" }));
  expect(localStorage.getItem("formulasnap-background-blur")).toBe("9");
});

it.each([["garbage", "9"], ["Infinity", "9"], ["", "9"], ["-4", "0"], ["100", "40"]])(
  "handles an invalid saved blur of %s without breaking search", (saved, expected) => {
    localStorage.setItem("formulasnap-background-blur", saved);
    render(<App />);
    expect(screen.getAllByRole("group").length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole("button", { name: "Open Settings" }));
    expect((screen.getByRole("slider") as HTMLInputElement).value).toBe(expected);
  }
);


it("limits Formula booklet to supplied equations, opens its printed page, and excludes exam extras", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Formula booklet" }));
  expect(screen.getByRole("status").textContent).toContain("154 formulae");
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "Newton–Raphson" } });
  expect(screen.getByRole("group", { name: "Newton–Raphson Iteration" })).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Expand Newton–Raphson Iteration" }));
  expect(screen.getByRole("link", { name: "Open the official formula booklet" }).getAttribute("href")).toContain("#page=12");
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "projectile range" } });
  expect(screen.queryByRole("group", { name: "Projectile Range on Level Ground" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Exam extras" }));
  expect(screen.getByRole("group", { name: "Projectile Range on Level Ground" })).toBeTruthy();
});

it("keeps the selected topic when switching collections and explains the empty M1 booklet section", () => {
  localStorage.setItem("formulasnap-subject", "Maths");
  localStorage.setItem("formulasnap-topic", "Mechanics 1");
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Formula booklet" }));
  expect(screen.getByText(/No dedicated M1 formulae/)).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Exam extras" }));
  expect(screen.getByRole("group", { name: "Newton's Second Law" })).toBeTruthy();
});
