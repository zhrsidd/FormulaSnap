// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { useState } from "react";
import { CollectionTabs, type Collection } from "./CollectionTabs";
afterEach(cleanup);
it("moves focus and selection together with arrow keys and Home/End", () => {
  function Tabs() { const [value, setValue] = useState<Collection>("all"); return <CollectionTabs value={value} onChange={setValue} />; }
  render(<Tabs />);
  fireEvent.keyDown(screen.getByRole("button", { name: "All formulae" }), { key: "ArrowRight" });
  const booklet = screen.getByRole("button", { name: "Formula booklet" });
  expect(booklet.getAttribute("aria-pressed")).toBe("true");
  expect(document.activeElement).toBe(booklet);
  fireEvent.keyDown(booklet, { key: "End" });
  expect(screen.getByRole("button", { name: "Exam extras" }).getAttribute("aria-pressed")).toBe("true");
  fireEvent.keyDown(document.activeElement!, { key: "ArrowRight" });
  expect(screen.getByRole("button", { name: "All formulae" }).getAttribute("aria-pressed")).toBe("true");
});
