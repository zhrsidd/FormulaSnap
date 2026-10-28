// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { CopyConfirm } from "./CopyConfirm";
afterEach(() => { cleanup(); vi.useRealTimers(); });
it("shows confirmation only after a successful clipboard write and resets", async () => {
  vi.useFakeTimers();
  render(<CopyConfirm onCopy={async () => true} />);
  const button = screen.getByRole("button");
  await act(async () => { fireEvent.click(button); });
  expect(button.getAttribute("data-copied")).toBe("true");
  await act(async () => { vi.advanceTimersByTime(1900); });
  expect(button.getAttribute("data-copied")).toBe("false");
});
it("does not report success on failure and cancels its timer when unmounted", async () => {
  vi.useFakeTimers();
  const { unmount, rerender } = render(<CopyConfirm onCopy={async () => false} />);
  await act(async () => { fireEvent.click(screen.getByRole("button")); });
  expect(screen.getByRole("button").getAttribute("data-copied")).toBe("false");
  rerender(<CopyConfirm onCopy={async () => true} />);
  await act(async () => { fireEvent.click(screen.getByRole("button")); });
  unmount();
  expect(vi.getTimerCount()).toBe(0);
});
