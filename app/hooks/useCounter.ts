import { useEffect, useRef, useState } from "react";

export function useCounter(target: string | number, suffix = "", duration = 1600) {
  const [text, setText] = useState(typeof target === "string" ? target : `${target}${suffix}`);
  const ref = useRef<HTMLSpanElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, "")) || 0;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const v = Math.round(numericTarget * eased);
              setText(v.toLocaleString("en-US") + suffix);
              if (p < 1) requestAnimationFrame(step);
              else setText(String(target));
            };
            requestAnimationFrame(step);
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return { ref, text };
}
