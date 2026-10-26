import { useCallback, useEffect, useRef, useState } from "react";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";

type Status = "idle" | "checking" | "downloading" | "ready" | "error";

export function AppUpdates({ showControls }: { showControls: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("Updates check automatically on launch and every four hours.");
  const busy = useRef(false);
  const installed = useRef(false);

  const checkForUpdates = useCallback(async () => {
    if (busy.current || installed.current) return;
    busy.current = true;
    setStatus("checking");
    setMessage("Checking for updates…");
    let update: Awaited<ReturnType<typeof check>> = null;
    try {
      update = await check({ timeout: 30_000 });
      if (!update) {
        setStatus("idle");
        setMessage("FormulaSnap is up to date.");
        return;
      }
      setStatus("downloading");
      setMessage(`Downloading FormulaSnap ${update.version}…`);
      await update.downloadAndInstall();
      installed.current = true;
      setStatus("ready");
      setMessage(`FormulaSnap ${update.version} is installed. Restart to use it.`);
    } catch (error) {
      console.error("FormulaSnap update failed:", error);
      setStatus("error");
      setMessage("Could not update. Check your connection and try again.");
    } finally {
      busy.current = false;
      await update?.close().catch(console.error);
    }
  }, []);

  useEffect(() => {
    // Delay startup work; cleanup also prevents duplicate checks in StrictMode.
    const startup = window.setTimeout(() => void checkForUpdates(), 5_000);
    const interval = window.setInterval(() => void checkForUpdates(), 4 * 60 * 60 * 1_000);
    return () => {
      window.clearTimeout(startup);
      window.clearInterval(interval);
    };
  }, [checkForUpdates]);

  if (!showControls && status !== "ready" && status !== "downloading") return null;

  return (
    <div className="update-status">
      <p role="status" aria-live="polite">{message}</p>
      {status === "ready" ? (
        <button className="settings-close" onClick={() => {
          void relaunch().catch((error) => {
            console.error("Could not restart:", error);
            setMessage("Please quit and reopen FormulaSnap to finish updating.");
          });
        }}>Restart now</button>
      ) : showControls && (
        <button className="settings-close" disabled={status === "checking" || status === "downloading"}
          onClick={() => void checkForUpdates()}>Check for updates</button>
      )}
    </div>
  );
}
