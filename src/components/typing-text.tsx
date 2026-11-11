import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypingTextProps {
  words: readonly string[];
  className?: string;
}

export function TypingText({ words, className }: TypingTextProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? 35 : 70
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, reduce]);

  const text = reduce ? words.join(" • ") : words[index % words.length].slice(0, subIndex);

  return (
    <span className={className} aria-live="polite">
      {text}
      {!reduce && (
        <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-primary align-middle" aria-hidden="true" />
      )}
    </span>
  );
}
