import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useId, useRef } from "react";

const choices = [["all", "All formulae"], ["booklet", "Formula booklet"], ["extras", "Exam extras"]] as const;
export type Collection = (typeof choices)[number][0];

export function CollectionTabs({ value, onChange }: { value: Collection; onChange: (value: Collection) => void }) {
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = useReducedMotion();
  return <LayoutGroup id={id}>
    <div className="collection-tabs" role="toolbar" aria-label="Formula collection">
      {choices.map(([choice, label], index) => <button type="button" key={choice}
        ref={node => { buttons.current[index] = node; }} aria-pressed={value === choice}
        tabIndex={value === choice ? 0 : -1} onClick={() => onChange(choice)}
        onKeyDown={event => {
          let next: number;
          if (event.key === "ArrowRight") next = (index + 1) % choices.length;
          else if (event.key === "ArrowLeft") next = (index + choices.length - 1) % choices.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = choices.length - 1;
          else return;
          event.preventDefault(); event.stopPropagation();
          onChange(choices[next][0]); buttons.current[next]?.focus();
        }}>
        {choice === value && <motion.span className="collection-indicator" layoutId="collection-pill"
          aria-hidden="true" transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30, mass: .9 }} />}
        <span className="collection-label">{label}</span>
      </button>)}
    </div>
  </LayoutGroup>;
}
