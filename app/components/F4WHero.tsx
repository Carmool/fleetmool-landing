import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { F4WHeroDashboard } from "./F4WHeroDashboard";
import { whatsappUrl } from "~/lib/whatsapp";
import { useReveal } from "~/hooks/useReveal";

export function F4WHero() {
  const h1Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();
  const actionsRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <Reveal className="hero-eyebrow-pill">
            <span className="what-new">F4W</span>
            <span>Fleetmool for Workshops: 3 meses gratis</span>
          </Reveal>
          <h1 ref={h1Ref} className="reveal d1">
            <span>Tu taller,</span>
            <br />
            <span className="accent">digitalizado en minutos.</span>
          </h1>
          <p ref={subRef} className="hero-sub reveal d2">
            Gestiona servicios, cotiza en 90 segundos y conecta tu taller directamente con flotas.
            Sin instalación, sin capacitación compleja.
          </p>
          <div ref={actionsRef} className="hero-actions reveal d3">
            <WhatsAppCta surface="f4w" preset="trial" size="lg">
              Registrar mi taller gratis
            </WhatsAppCta>
            <a
              href={whatsappUrl("f4w", "demo")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <span>Ver demo en vivo</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <F4WHeroDashboard />
    </section>
  );
}
