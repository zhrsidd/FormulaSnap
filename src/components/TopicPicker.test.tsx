// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { useState } from "react";
import { TopicPicker } from "./TopicPicker";

beforeEach(() => { HTMLElement.prototype.scrollIntoView = vi.fn(); });
afterEach(cleanup);
function Picker() {
  const [value, setValue] = useState("All");
  return <TopicPicker value={value} onChange={setValue} topics={["Pure 1", "Mechanics 1", "Mechanics 2", "Statistics 1"]} />;
}
it("searches grouped topics, selects with keys, and closes with Escape without changing selection", () => {
  render(<Picker />);
  const input = screen.getByRole("combobox", { name: "Topic" }) as HTMLInputElement;
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "mechanics" } });
  expect(screen.getAllByRole("option")).toHaveLength(2);
  expect(screen.getByRole("group", { name: "Mechanics" })).toBeTruthy();
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input.value).toBe("Mechanics 2");
  expect(screen.queryByRole("listbox")).toBeNull();
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "impossible topic" } });
  expect(screen.getByText("No matching topics")).toBeTruthy();
  fireEvent.keyDown(input, { key: "Escape" });
  expect(input.value).toBe("Mechanics 2");
  expect(input.getAttribute("aria-expanded")).toBe("false");
});
it("closes on outside press and retains the chosen value", () => {
  render(<Picker />);
  fireEvent.focus(screen.getByRole("combobox"));
  fireEvent.click(screen.getByRole("option", { name: "Pure 1" }));
  fireEvent.focus(screen.getByRole("combobox"));
  fireEvent.pointerDown(document.body);
  expect(screen.queryByRole("listbox")).toBeNull();
  expect((screen.getByRole("combobox") as HTMLInputElement).value).toBe("Pure 1");
});
