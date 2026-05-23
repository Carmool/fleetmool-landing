import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

type Surface = "fleetmool" | "f4w";

const CheckIcon = () => (
  <svg fill="none" strokeWidth="2.5" viewBox="0 0 16 16">
    <path d="M3 8l3 3 7-7" />
  </svg>
);

/* ── Fleetmool copy ── */
const FLEETMOOL = {
  eyebrow: "Empieza hoy",
  title: "Tu operación de flota, reinventada.",
  subtitle: "Únete a más de 500 flotas que ya operan con inteligencia. Sin setup complejo. Sin contratos largos.",
  bullets: [
    "Sin tarjeta de crédito requerida",
    "Onboarding en 30 minutos",
    "Soporte dedicado en español",
  ],
  cta1: { label: "Comenzar gratis por WhatsApp", preset: "trial" as const },
  card: {
    label: "Plan recomendado",
    name: "Standard",
    desc: "Para flotas de hasta 20 vehículos con visibilidad completa y IA predictiva.",
    price: "$1,499",
    cycle: "MXN / mes",
    features: [
      "Hasta 20 vehículos",
      "IA predictiva completa",
      "Talleres ilimitados",
      "Alertas WhatsApp + email",
    ],
    cta: { label: "Comenzar prueba gratuita", preset: "trial" as const },
    note: "Sin tarjeta de crédito · 14 días gratis",
  },
};

/* ── F4W copy ── */
const F4W = {
  eyebrow: "Empieza hoy",
  title: "Digitaliza tu taller hoy.",
  subtitle: "Únete a más de 2,000 talleres que ya operan con F4W. Empieza gratis en minutos.",
  bullets: [
    "3 meses gratis · sin tarjeta de crédito",
    "Configuración en 30 minutos",
    "Soporte dedicado en español",
  ],
  cta1: { label: "Registrar mi taller gratis", preset: "trial" as const },
  card: {
    label: "Plan recomendado",
    name: "Pro · 3 meses gratis",
    desc: "Para talleres en operación. Todo incluido, un solo precio — sin importar tu volumen.",
    price: "$69",
    cycle: "MXN / mes · después de 3 meses gratis",
    features: [
      "Órdenes ilimitadas",
      "Cotizaciones + WhatsApp",
      "Conexiones de flota ilimitadas",
      "Soporte prioritario",
    ],
    cta: { label: "Comenzar 3 meses gratis", preset: "pro" as const },
    note: "Sin tarjeta de crédito · cancela cuando quieras",
  },
};

export function FinalCta({ surface = "fleetmool" }: { surface?: Surface }) {
  const data = surface === "f4w" ? F4W : FLEETMOOL;

  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-inner">
          <Reveal>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1">{data.title}</h2>
            <p className="cta-sub">{data.subtitle}</p>
            <div className="cta-bullets">
              {data.bullets.map((b) => (
                <div key={b} className="cta-bullet">
                  <CheckIcon />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <WhatsAppCta surface={surface} preset={data.cta1.preset} size="lg">
                {data.cta1.label}
              </WhatsAppCta>
            </div>
          </Reveal>

          <Reveal stagger={1} className="cta-card">
            <div className="cta-card-lab">{data.card.label}</div>
            <h3>{data.card.name}</h3>
            <div className="desc">{data.card.desc}</div>
            <div className="price-row">
              <span className="v">{data.card.price}</span>
              <span className="c">{data.card.cycle}</span>
            </div>
            <ul className="feats">
              {data.card.features.map((f) => (
                <li key={f}>
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <WhatsAppCta surface={surface} preset={data.card.cta.preset}>
              {data.card.cta.label}
            </WhatsAppCta>
            <div className="note">{data.card.note}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
