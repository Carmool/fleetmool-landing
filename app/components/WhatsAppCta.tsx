import { whatsappUrl, type Preset, type Surface } from "~/lib/whatsapp";

type Props<S extends Surface> = {
  surface: S;
  preset: Preset<S>;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const WhatsAppIcon = () => (
  <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.8-.4-1.7-.9-2.4-1.6-.7-.8-1.3-1.7-1.5-2.5-.1-.3 0-.4.2-.6l.7-.7c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.2-.2-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

export function WhatsAppCta<S extends Surface>({
  surface,
  preset,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: Props<S>) {
  const variantClass =
    variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost";
  const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "";
  const classes = ["btn", variantClass, sizeClass, className].filter(Boolean).join(" ");

  return (
    <a href={whatsappUrl(surface, preset)} target="_blank" rel="noopener noreferrer" className={classes}>
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  );
}
