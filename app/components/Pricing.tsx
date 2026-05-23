import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { WA_NUMBER } from "~/lib/whatsapp";

type Surface = "fleetmool" | "f4w";

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" strokeWidth="2">
    <path d="M3 8l3 3 7-7" />
  </svg>
);

/* ── Fleetmool copy ── */
const FLEETMOOL = {
  eyebrow: "Precios",
  title: "Transparente. Sin sorpresas.",
  subtitle: "Sin contratos anuales. Sin costos de implementación. Empieza hoy.",
  plans: [
    {
      name: "Prueba",
      price: "Gratis",
      currency: null,
      cycle: "14 días · hasta 10 vehículos",
      desc: "Para conocer Fleetmool sin compromiso. Sin tarjeta de crédito.",
      features: [
        "Hasta 10 vehículos",
        "Historial de mantenimiento",
        "Alertas básicas",
        "1 taller conectado",
      ],
      cta: { label: "Comenzar gratis", preset: "trial" as const, variant: "secondary" as const },
      featured: false,
      badge: null,
      stagger: 0 as const,
    },
    {
      name: "Standard",
      price: "1,499",
      currency: "$",
      cycle: "MXN / mes · hasta 20 vehículos",
      desc: "Para flotas en operación con visibilidad completa y mantenimiento predictivo.",
      features: [
        "Hasta 20 vehículos",
        "IA predictiva completa",
        "Talleres ilimitados",
        "Reportes operacionales",
        "Alertas WhatsApp + email",
      ],
      cta: { label: "Comenzar gratis", preset: "trial" as const, variant: "primary" as const },
      featured: true,
      badge: "Más popular",
      stagger: 1 as const,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      currency: null,
      cycle: "Para flotas de 20+ vehículos",
      desc: "Solución a medida con soporte dedicado, SLA garantizado y onboarding asistido.",
      features: [
        "Vehículos ilimitados",
        "Soporte dedicado 24/7",
        "SLA de disponibilidad",
        "Integraciones API",
        "Onboarding asistido",
      ],
      cta: {
        label: "Hablar con ventas",
        href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Quisiera hablar con ventas sobre Fleetmool Enterprise")}`,
        variant: "secondary" as const,
      },
      featured: false,
      badge: null,
      stagger: 2 as const,
    },
  ],
};

/* ── F4W copy ── */
const F4W = {
  eyebrow: "Precios",
  title: "Precios diseñados para talleres.",
  subtitle: "3 meses gratis. Luego $69/mes — sin importar el tamaño de tu taller.",
  plans: [
    {
      name: "Prueba",
      price: "Gratis",
      currency: null,
      cycle: "3 meses · todas las funciones Pro",
      desc: "Empieza sin riesgo. Todo Pro incluido durante 3 meses, sin tarjeta.",
      features: [
        "Todas las funciones Pro",
        "Órdenes ilimitadas",
        "Cotizaciones + WhatsApp",
        "Conexiones de flota",
      ],
      cta: { label: "Registrar mi taller", preset: "trial" as const, variant: "secondary" as const },
      featured: false,
      badge: null,
      stagger: 0 as const,
    },
    {
      name: "Pro",
      price: "69",
      currency: "$",
      cycle: "MXN / mes · sin importar el tamaño",
      desc: "Para talleres en operación. Todo incluido, para cualquier volumen — un solo precio.",
      features: [
        "Órdenes ilimitadas",
        "Cotizaciones + WhatsApp",
        "Conexiones de flota ilimitadas",
        "Historial completo de vehículos",
        "Reportes y soporte prioritario",
      ],
      cta: { label: "Comenzar 3 meses gratis", preset: "pro" as const, variant: "primary" as const },
      featured: true,
      badge: "Más popular",
      stagger: 1 as const,
    },
    {
      name: "Multi-sucursal",
      price: "Personalizado",
      currency: null,
      cycle: "Para cadenas de talleres",
      desc: "Para grupos con 2+ sucursales que necesitan gestión centralizada y reportes consolidados.",
      features: [
        "Sucursales ilimitadas",
        "Dashboard centralizado",
        "Reportes consolidados",
        "Gestión de personal",
        "Soporte dedicado",
      ],
      cta: { label: "Hablar con ventas", preset: "enterprise" as const, variant: "secondary" as const },
      featured: false,
      badge: null,
      stagger: 2 as const,
    },
  ],
};

export function Pricing({ surface = "fleetmool" }: { surface?: Surface }) {
  const data = surface === "f4w" ? F4W : FLEETMOOL;

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal className="sec-head centered">
          <div className="eyebrow">{data.eyebrow}</div>
          <h2 className="h-1">{data.title}</h2>
          <p className="lede">{data.subtitle}</p>
        </Reveal>

        <div className="pricing-grid">
          {data.plans.map((plan) => (
            <Reveal
              key={plan.name}
              stagger={plan.stagger}
              className={["price", plan.featured ? "featured" : ""].filter(Boolean).join(" ")}
            >
              {plan.badge && <span className="price-badge">{plan.badge}</span>}
              <div className="price-name">{plan.name}</div>
              <div className="price-price">
                {plan.currency && <span className="currency">{plan.currency}</span>}
                <div className="v">{plan.price}</div>
              </div>
              <div className="price-cycle">{plan.cycle}</div>
              <p className="price-desc">{plan.desc}</p>
              <ul className="price-feats">
                {plan.features.map((feat) => (
                  <li key={feat} className="price-feat">
                    <CheckIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              {"href" in plan.cta ? (
                <a
                  href={plan.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-${plan.cta.variant}`}
                >
                  {plan.cta.label}
                </a>
              ) : (
                <WhatsAppCta
                  surface={surface}
                  preset={plan.cta.preset}
                  variant={plan.cta.variant}
                >
                  {plan.cta.label}
                </WhatsAppCta>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
