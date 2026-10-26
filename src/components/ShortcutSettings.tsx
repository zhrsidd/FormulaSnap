import { useEffect, useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { DEFAULT_SHORTCUT, formatShortcut, shortcutFromEvent } from "../lib/shortcuts";

type Preferences = { shortcut: string; warning: string | null };

export function ShortcutSettings() {
  const [saved, setSaved] = useState<string | null>(null);
  const [draft, setDraft] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const recorder = useRef<HTMLButtonElement>(null);
  const saving = useRef(false);

  useEffect(() => {
    let disposed = false;
    void invoke<Preferences>("get_shortcut").then(preferences => {
      if (!disposed) {
        setSaved(preferences.shortcut);
        setMessage(preferences.warning ?? "Works even when another app is in front.");
      }
    }).catch(() => { if (!disposed) setError("Could not load the shortcut. Reopen Settings to try again."); });
    return () => { disposed = true; };
  }, []);

  useEffect(() => { if (recording) recorder.current?.focus(); }, [recording]);

  const save = async (shortcut: string) => {
    if (saving.current) return;
    saving.current = true;
    setBusy(true);
    setError("");
    try {
      const preferences = await invoke<Preferences>("set_shortcut", { shortcut });
      setSaved(preferences.shortcut);
      setDraft(null);
      setRecording(false);
      setMessage("Shortcut saved. It is active now and will be restored when you reopen FormulaSnap.");
    } catch (reason) {
      setError(String(reason));
    } finally {
      saving.current = false;
      setBusy(false);
    }
  };

  return <section className="shortcut-setting" aria-labelledby="shortcut-heading">
    <div className="settings-section-label" id="shortcut-heading">Keyboard shortcut</div>
    <div className="setting-row shortcut-row">
      <div>
        <strong>Bring FormulaSnap to front</strong>
        <p>Current shortcut: <kbd>{saved ? formatShortcut(saved) : "Loading…"}</kbd></p>
      </div>
      <div className="shortcut-controls">
        <button className="settings-close" ref={recorder} data-shortcut-recorder
          disabled={saved === null || busy}
          onClick={() => { setRecording(true); setDraft(null); setError(""); }}
          onBlur={() => setRecording(false)}
          onKeyDown={event => {
            if (!recording) return;
            if (event.key === "Tab") { setRecording(false); return; }
            event.preventDefault();
            event.stopPropagation();
            if (event.key === "Escape") { setRecording(false); setDraft(null); setError(""); return; }
            if (event.repeat || event.nativeEvent.isComposing) return;
            const shortcut = shortcutFromEvent(event.nativeEvent);
            if (!shortcut) {
              if (!/^(Meta|Control|Alt|Shift)$/.test(event.key)) setError("Use Command, Control or Option plus a letter, number or another supported key.");
              return;
            }
            setDraft(shortcut);
            setRecording(false);
            setError("");
          }}
        >{recording ? "Press shortcut…" : "Change shortcut"}</button>
        {draft && <>
          <kbd aria-label="New shortcut">{formatShortcut(draft)}</kbd>
          <button className="settings-close" disabled={busy} onClick={() => void save(draft)}>{busy ? "Saving…" : "Save shortcut"}</button>
        </>}
        {(recording || draft) && <button className="settings-close" disabled={busy} onClick={() => { setRecording(false); setDraft(null); setError(""); }}>Cancel</button>}
        <button className="settings-close" disabled={saved === null || busy || recording}
          onClick={() => void save(DEFAULT_SHORTCUT)}>Reset to default</button>
      </div>
    </div>
    <p className="shortcut-help" role="status" aria-live="polite">{recording ? "Press your new combination. Escape cancels; Tab moves to the next control." : message}</p>
    {error && <p className="copy-error" role="alert">{error}</p>}
  </section>;
}
