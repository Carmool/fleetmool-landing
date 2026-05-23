import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";
import { WA_NUMBER } from "~/lib/whatsapp";

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" strokeWidth="2">
    <path d="M3 8l3 3 7-7" />
  </svg>
);

export function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal className="sec-head centered">
          <div className="eyebrow">Precios</div>
          <h2 className="h-1">Transparente. Sin sorpresas.</h2>
          <p className="lede">
            Sin contratos anuales. Sin costos de implementación. Empieza hoy.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {/* Plan 1: Prueba */}
          <Reveal className="price">
            <div className="price-name">Prueba</div>
            <div className="price-price">
              <div className="v">Gratis</div>
            </div>
            <div className="price-cycle">14 días · hasta 10 vehículos</div>
            <p className="price-desc">
              Para conocer Fleetmool sin compromiso. Sin tarjeta de crédito.
            </p>
            <ul className="price-feats">
              <li className="price-feat">
                <CheckIcon />
                <span>Hasta 10 vehículos</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Historial de mantenimiento</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Alertas básicas</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>1 taller conectado</span>
              </li>
            </ul>
            <WhatsAppCta surface="fleetmool" preset="trial" variant="secondary">
              Comenzar gratis
            </WhatsAppCta>
          </Reveal>

          {/* Plan 2: Standard (featured) */}
          <Reveal stagger={1} className="price featured">
            <span className="price-badge">Más popular</span>
            <div className="price-name">Standard</div>
            <div className="price-price">
              <span className="currency">$</span>
              <div className="v">1,499</div>
            </div>
            <div className="price-cycle">MXN / mes · hasta 20 vehículos</div>
            <p className="price-desc">
              Para flotas en operación con visibilidad completa y mantenimiento
              predictivo.
            </p>
            <ul className="price-feats">
              <li className="price-feat">
                <CheckIcon />
                <span>Hasta 20 vehículos</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>IA predictiva completa</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Talleres ilimitados</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Reportes operacionales</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Alertas WhatsApp + email</span>
              </li>
            </ul>
            <WhatsAppCta surface="fleetmool" preset="trial" variant="primary">
              Comenzar gratis
            </WhatsAppCta>
          </Reveal>

          {/* Plan 3: Enterprise */}
          <Reveal stagger={2} className="price">
            <div className="price-name">Enterprise</div>
            <div className="price-price">
              <div className="v">Personalizado</div>
            </div>
            <div className="price-cycle">Para flotas de 20+ vehículos</div>
            <p className="price-desc">
              Solución a medida con soporte dedicado, SLA garantizado y
              onboarding asistido.
            </p>
            <ul className="price-feats">
              <li className="price-feat">
                <CheckIcon />
                <span>Vehículos ilimitados</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Soporte dedicado 24/7</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>SLA de disponibilidad</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Integraciones API</span>
              </li>
              <li className="price-feat">
                <CheckIcon />
                <span>Onboarding asistido</span>
              </li>
            </ul>
            {/* Enterprise uses a unique message not covered by existing presets */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Hola! Quisiera hablar con ventas sobre Fleetmool Enterprise"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Hablar con ventas
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
