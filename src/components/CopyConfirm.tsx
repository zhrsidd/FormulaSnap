import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Copy feedback inspired by Watermelon Copy Confirm; success follows the actual clipboard result. */
export function CopyConfirm({ onCopy }: { onCopy: () => Promise<boolean> }) {
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const mounted = useRef(true);
  const pending = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; clearTimeout(timer.current); };
  }, []);
  return <button type="button" className="copy-confirm" disabled={busy}
    data-copied={copied} onClick={async event => {
      event.stopPropagation();
      if (pending.current) return;
      pending.current = true;
      setBusy(true);
      try {
        const success = await onCopy();
        if (success && mounted.current) {
          clearTimeout(timer.current);
          setCopied(true);
          timer.current = setTimeout(() => setCopied(false), 1800);
        }
      } finally {
        pending.current = false;
        if (mounted.current) setBusy(false);
      }
    }}>
    <span className="copy-confirm-label" aria-live="polite" aria-atomic="true">
      <AnimatePresence initial={false} mode="wait">
        <motion.span key={copied ? "copied" : "copy"} initial={{ opacity: 0, y: reduceMotion ? 0 : 4 }}
          animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }}
          transition={{ duration: reduceMotion ? 0 : .12 }}>
          {copied ? "✓ Copied" : "Copy"}
        </motion.span>
      </AnimatePresence>
    </span>
  </button>;
}
