import { type HTMLAttributes } from "react";
import { useReveal } from "~/hooks/useReveal";

type Props = HTMLAttributes<HTMLDivElement> & {
  stagger?: 1 | 2 | 3 | 4;
};

export function Reveal({ stagger, className = "", children, ...rest }: Props) {
  const ref = useReveal();
  const staggerClass = stagger ? `d${stagger}` : "";
  return (
    <div ref={ref} className={`reveal ${staggerClass} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
