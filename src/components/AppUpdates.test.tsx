// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StrictMode } from "react";
import { AppUpdates } from "./AppUpdates";

const { check, relaunch } = vi.hoisted(() => ({ check: vi.fn(), relaunch: vi.fn() }));
vi.mock("@tauri-apps/plugin-updater", () => ({ check }));
vi.mock("@tauri-apps/plugin-process", () => ({ relaunch }));

beforeEach(() => { vi.useFakeTimers(); vi.resetAllMocks(); });
afterEach(() => { cleanup(); vi.useRealTimers(); });

describe("desktop updater", () => {
  it("checks once on launch in StrictMode and periodically while open", async () => {
    check.mockResolvedValue(null);
    render(<StrictMode><AppUpdates showControls /></StrictMode>);
    await act(() => vi.advanceTimersByTimeAsync(5_000));
    expect(check).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("status").textContent).toContain("up to date");
    await act(() => vi.advanceTimersByTimeAsync(4 * 60 * 60 * 1_000));
    expect(check).toHaveBeenCalledTimes(2);
  });

  it("installs automatically, closes the resource and waits for restart", async () => {
    const downloadAndInstall = vi.fn().mockResolvedValue(undefined);
    const close = vi.fn().mockResolvedValue(undefined);
    check.mockResolvedValue({ version: "1.1.2", downloadAndInstall, close });
    relaunch.mockResolvedValue(undefined);
    render(<AppUpdates showControls={false} />);
    await act(() => vi.advanceTimersByTimeAsync(5_000));
    expect(downloadAndInstall).toHaveBeenCalledOnce();
    expect(close).toHaveBeenCalledOnce();
    expect(relaunch).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Restart now" }));
    expect(relaunch).toHaveBeenCalledOnce();
    await act(() => vi.advanceTimersByTimeAsync(4 * 60 * 60 * 1_000));
    expect(check).toHaveBeenCalledTimes(1);
  });

  it("allows retry after an offline check", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    check.mockRejectedValueOnce(new Error("offline")).mockResolvedValue(null);
    render(<AppUpdates showControls />);
    await act(() => vi.advanceTimersByTimeAsync(5_000));
    expect(screen.getByRole("status").textContent).toContain("Could not update");
    await act(async () => { fireEvent.click(screen.getByRole("button", { name: "Check for updates" })); });
    expect(screen.getByRole("status").textContent).toContain("up to date");
    vi.restoreAllMocks();
  });

  it("releases failed downloads and allows retry", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const close = vi.fn().mockResolvedValue(undefined);
    check.mockResolvedValueOnce({ version: "1.1.2", close,
      downloadAndInstall: vi.fn().mockRejectedValue(new Error("invalid signature"))
    }).mockResolvedValue(null);
    render(<AppUpdates showControls />);
    await act(() => vi.advanceTimersByTimeAsync(5_000));
    expect(close).toHaveBeenCalledOnce();
    expect(screen.queryByRole("button", { name: "Restart now" })).toBeNull();
    await act(async () => { fireEvent.click(screen.getByRole("button", { name: "Check for updates" })); });
    expect(check).toHaveBeenCalledTimes(2);
    vi.restoreAllMocks();
  });
});
