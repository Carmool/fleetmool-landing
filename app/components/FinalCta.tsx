import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

const CheckIcon = () => (
  <svg fill="none" strokeWidth="2.5" viewBox="0 0 16 16">
    <path d="M3 8l3 3 7-7" />
  </svg>
);

export function FinalCta() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-inner">
          <Reveal>
            <div className="eyebrow">Empieza hoy</div>
            <h2 className="h-1">Tu operación de flota, reinventada.</h2>
            <p className="cta-sub">
              Únete a más de 500 flotas que ya operan con inteligencia. Sin
              setup complejo. Sin contratos largos.
            </p>
            <div className="cta-bullets">
              <div className="cta-bullet">
                <CheckIcon />
                <span>Sin tarjeta de crédito requerida</span>
              </div>
              <div className="cta-bullet">
                <CheckIcon />
                <span>Onboarding en 30 minutos</span>
              </div>
              <div className="cta-bullet">
                <CheckIcon />
                <span>Soporte dedicado en español</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <WhatsAppCta surface="fleetmool" preset="trial" size="lg">
                Comenzar gratis por WhatsApp
              </WhatsAppCta>
            </div>
          </Reveal>

          <Reveal stagger={1} className="cta-card">
            <div className="cta-card-lab">Plan recomendado</div>
            <h3>Standard</h3>
            <div className="desc">
              Para flotas de hasta 20 vehículos con visibilidad completa y IA
              predictiva.
            </div>
            <div className="price-row">
              <span className="v">$1,499</span>
              <span className="c">MXN / mes</span>
            </div>
            <ul className="feats">
              <li>
                <CheckIcon />
                <span>Hasta 20 vehículos</span>
              </li>
              <li>
                <CheckIcon />
                <span>IA predictiva completa</span>
              </li>
              <li>
                <CheckIcon />
                <span>Talleres ilimitados</span>
              </li>
              <li>
                <CheckIcon />
                <span>Alertas WhatsApp + email</span>
              </li>
            </ul>
            <WhatsAppCta surface="fleetmool" preset="trial">
              Comenzar prueba gratuita
            </WhatsAppCta>
            <div className="note">Sin tarjeta de crédito · 14 días gratis</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
