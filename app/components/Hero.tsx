import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { HeroDashboard } from "./HeroDashboard";
import { whatsappUrl } from "~/lib/whatsapp";
import { useReveal } from "~/hooks/useReveal";

export function Hero() {
  const h1Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();
  const actionsRef = useReveal<HTMLDivElement>();
  const metaRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <Reveal className="hero-eyebrow-pill">
            <span className="what-new">Nuevo</span>
            <span>IA predictiva — Anticipa fallas con 7 días</span>
          </Reveal>
          <h1 ref={h1Ref} className="reveal d1">
            <span>Inteligencia operacional</span>
            <br />
            <span className="accent">para tu flota.</span>
          </h1>
          <p ref={subRef} className="hero-sub reveal d2">
            Conecta tu operación con los talleres que mantienen tu flota. Mantenimiento predictivo,
            diagnósticos en tiempo real y visibilidad total — sin complejidad.
          </p>
          <div ref={actionsRef} className="hero-actions reveal d3">
            <WhatsAppCta surface="fleetmool" preset="trial" size="lg">
              Comenzar gratis por WhatsApp
            </WhatsAppCta>
            <a
              href={whatsappUrl("fleetmool", "demo")}
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
          <div ref={metaRef} className="hero-meta reveal d4">
            <span>Sin tarjeta de crédito</span>
            <span className="dot"></span>
            <span>Onboarding en 30 minutos</span>
            <span className="dot"></span>
            <span>Soporte en español</span>
          </div>
        </div>
      </div>
      <HeroDashboard />
    </section>
  );
}
