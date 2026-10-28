import { createPortal } from "react-dom";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type TopicOption = { value: string; group: string };
function groupFor(topic: string) {
  if (topic.startsWith("Further Pure")) return "Further pure";
  if (topic.startsWith("Pure")) return "Pure";
  if (topic.startsWith("Mechanics")) return "Mechanics";
  if (topic.startsWith("Statistics")) return "Statistics";
  if (topic.startsWith("Decision")) return "Decision";
  return "Physics";
}

/** Editable grouped combobox: focus stays in the input, options follow aria-activedescendant. */
export function TopicPicker({ value, topics, onChange }: {
  value: string; topics: string[]; onChange: (topic: string) => void;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState<CSSProperties>({});
  const input = useRef<HTMLInputElement>(null);
  const anchor = useRef<HTMLDivElement>(null);
  const popup = useRef<HTMLDivElement>(null);
  const options = useMemo(() => {
    const all: TopicOption[] = [{ value: "All", group: "" }, ...topics.map(topic => ({ value: topic, group: groupFor(topic) }))];
    const needle = query.trim().toLowerCase();
    return all.filter(item => (item.value === "All" ? "All topics" : item.value).toLowerCase().includes(needle));
  }, [topics, query]);
  const current = options[Math.min(active, options.length - 1)];
  function show() { setQuery(""); setActive(0); setOpen(true); }
  function choose(topic: string) { onChange(topic); setOpen(false); setQuery(""); }
  useLayoutEffect(() => {
    if (!open) return;
    function place() {
      const rect = anchor.current?.getBoundingClientRect();
      if (!rect) return;
      const viewport = window.visualViewport;
      const height = viewport?.height ?? window.innerHeight;
      const top = viewport?.offsetTop ?? 0;
      const width = Math.min(Math.max(rect.width, 240), window.innerWidth - 24);
      const below = Math.max(0, height + top - rect.bottom - 10);
      const above = Math.max(0, rect.top - top - 10);
      const upward = below < 180 && above > below;
      setPosition({ position: "fixed", left: Math.max(12, Math.min(rect.left, window.innerWidth - width - 12)), width,
        maxHeight: Math.min(300, upward ? above : below),
        ...(upward ? { bottom: window.innerHeight - rect.top + 6 } : { top: rect.bottom + 6 }) });
    }
    place(); window.addEventListener("resize", place); window.addEventListener("scroll", place, true);
    window.visualViewport?.addEventListener("resize", place);
    return () => { window.removeEventListener("resize", place); window.removeEventListener("scroll", place, true); window.visualViewport?.removeEventListener("resize", place); };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!anchor.current?.contains(event.target as Node) && !popup.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  useEffect(() => {
    if (open && current) document.getElementById(`${id}-${encodeURIComponent(current.value)}`)?.scrollIntoView({ block: "nearest" });
  }, [open, current, id]);
  return <div className="topic-picker" data-topic-picker ref={anchor}>
    <input ref={input} role="combobox" aria-label="Topic" autoComplete="off" aria-autocomplete="list"
      aria-expanded={open} aria-controls={`${id}-list`} aria-activedescendant={open && current ? `${id}-${encodeURIComponent(current.value)}` : undefined}
      value={open ? query : value === "All" ? "All topics" : value} placeholder="Search topics…"
      onFocus={show} onChange={event => { setQuery(event.target.value); setActive(0); setOpen(true); }}
      onBlur={event => { if (!popup.current?.contains(event.relatedTarget as Node)) setOpen(false); }}
      onKeyDown={event => {
        if (["Escape", "ArrowDown", "ArrowUp", "Enter", "Home", "End"].includes(event.key)) event.stopPropagation();
        if (event.key === "Escape") { event.preventDefault(); setOpen(false); return; }
        if (event.key === "Tab") { setOpen(false); return; }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          if (!open) { show(); return; }
          setActive(index => options.length ? (index + (event.key === "ArrowDown" ? 1 : options.length - 1)) % options.length : 0);
        } else if (event.key === "Enter" && open) { event.preventDefault(); if (current) choose(current.value); }
        else if (open && (event.key === "Home" || event.key === "End")) { event.preventDefault(); setActive(event.key === "Home" ? 0 : Math.max(0, options.length - 1)); }
      }} />
    <button type="button" className="topic-chevron" aria-label={open ? "Close topics" : "Show topics"}
      onMouseDown={event => event.preventDefault()} onClick={() => { if (open) setOpen(false); else { input.current?.focus(); show(); } }}>
      <span aria-hidden="true">⌄</span>
    </button>
    {open && createPortal(<div ref={popup} className="topic-popup" data-topic-picker style={position}>
      <div id={`${id}-list`} role="listbox" aria-label="Topics">
        {!options.length && <p className="topic-empty">No matching topics</p>}
        {Array.from(new Set(options.map(option => option.group))).map(group => <div key={group} role={group ? "group" : undefined}
          aria-label={group || undefined}>
          {group && <div className="topic-group-label">{group}</div>}
          {options.filter(option => option.group === group).map(option => <div key={option.value}
            id={`${id}-${encodeURIComponent(option.value)}`} role="option" aria-selected={value === option.value}
            data-active={current?.value === option.value} onMouseDown={event => event.preventDefault()}
            onClick={() => choose(option.value)}>
            <span>{option.value === "All" ? "All topics" : option.value}</span>
            {value === option.value && <span aria-hidden="true">✓</span>}
          </div>)}
        </div>)}
      </div>
    </div>, document.body)}
  </div>;
}
