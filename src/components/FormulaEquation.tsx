import { useLayoutEffect, useRef, useState } from "react";
import { BlockMath } from "react-katex";

/** Give the equation the card's full width, then fit its typeset content. */
export function FormulaEquation({ math }: { math: string }) {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(18);

  useLayoutEffect(() => {
    let disposed = false;
    const fit = () => {
      if (disposed || !container.current || !content.current) return;
      const width = container.current.clientWidth;
      const currentSize = parseFloat(getComputedStyle(content.current).fontSize);
      const naturalWidth = content.current.getBoundingClientRect().width * 18 / currentSize;
      if (width > 0 && naturalWidth > 0) {
        const nextSize = Math.max(12, Math.min(18, 18 * (width - 2) / naturalWidth));
        setFontSize(current => Math.abs(current - nextSize) > 0.1 ? nextSize : current);
      }
    };
    const observer = new ResizeObserver(fit);
    if (container.current) observer.observe(container.current);
    fit();
    void document.fonts?.ready.then(fit);
    return () => { disposed = true; observer.disconnect(); };
  }, [math]);

  return <div className="equation" ref={container} style={{ fontSize }}>
    <div className="equation-content" ref={content}><BlockMath math={math} /></div>
  </div>;
}
