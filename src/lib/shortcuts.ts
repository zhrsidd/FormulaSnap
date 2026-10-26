export const DEFAULT_SHORTCUT = "Super+Shift+KeyY";

export function shortcutFromEvent(event: Pick<KeyboardEvent, "code" | "metaKey" | "ctrlKey" | "altKey" | "shiftKey">): string | null {
  if (!(event.metaKey || event.ctrlKey || event.altKey)) return null;
  if (!/^(Key[A-Z]|Digit[0-9]|F([1-9]|1[0-9]|2[0-4])|Space|Arrow(Up|Down|Left|Right)|Home|End|PageUp|PageDown|Backspace|Delete|Comma|Period|Slash|Backslash|Semicolon|Quote|Backquote|Minus|Equal|BracketLeft|BracketRight)$/.test(event.code)) return null;
  return [event.metaKey && "Super", event.ctrlKey && "Control", event.altKey && "Alt", event.shiftKey && "Shift", event.code].filter(Boolean).join("+");
}

export function formatShortcut(value: string): string {
  return value.split("+").map(part => {
    const modifier: Record<string, string> = { super: "⌘", command: "⌘", shift: "⇧", control: "⌃", ctrl: "⌃", alt: "⌥", option: "⌥" };
    return modifier[part.toLowerCase()] ?? part.replace(/^Key|^Digit/, "").replace(/^Arrow/, "");
  }).join(" ");
}
