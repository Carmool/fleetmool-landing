import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const STEP_COUNT = 4;
const DURATION_MS = 4000;

export function ConnectedFlow() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let interval: ReturnType<typeof setInterval> | null = null;

    const tick = () => setActive((i) => (i + 1) % STEP_COUNT);

    const startAutoplay = () => {
      if (interval || stopped) return;
      interval = setInterval(tick, DURATION_MS);
    };

    const onVisibility = () => {
      if (document.hidden && interval) {
        clearInterval(interval);
        interval = null;
      } else if (!document.hidden && !stopped) {
        startAutoplay();
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !stopped) startAutoplay();
          else if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      obs.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (interval) clearInterval(interval);
    };
  }, [stopped]);

  const onStepClick = (i: number) => {
    setStopped(true);
    setActive(i);
  };

  return (
    <section className="section connected">
      <div className="container">
        <div className="connected-inner">
          <Reveal>
            <div className="eyebrow">Integración</div>
            <h2 className="h-2" style={{ margin: "14px 0 18px" }}>
              Del taller a tu tablero,<br />en tiempo real.
            </h2>
            <p className="body" style={{ fontSize: "16.5px" }}>
              Cuando un taller registra un servicio en F4W, esa información aparece automáticamente en tu plataforma Fleetmool. Sin correos, sin PDFs, sin WhatsApp sin registro.
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "10px" }}>
              <a href="/f4w" className="btn btn-secondary">Conocer F4W →</a>
              <a
                href="https://wa.me/525573221028?text=Hola!%20Quisiera%20ver%20una%20demo%20de%20Fleetmool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Ver cómo funciona →
              </a>
            </div>
          </Reveal>

          <div
            ref={listRef}
            id="flow-list"
            className={`flow-list reveal d1${stopped ? " user-stopped" : ""}`}
          >
            {/* Step 1 */}
            <div
              className={`flow-step${active === 0 ? " is-active" : ""}`}
              data-step-idx="0"
              tabIndex={0}
              role="button"
              onClick={() => onStepClick(0)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onStepClick(0)}
            >
              <div className="flow-head">
                <span className="num">1</span>
                <span className="ti">Taller registra el servicio</span>
                <span className="chip blue" style={{ fontSize: "11px" }}>F4W</span>
              </div>
              <div className="flow-detail">
                <p className="sub">El mecánico captura diagnóstico, piezas y mano de obra en F4W.</p>
                <div className="flow-evidence">
                  <div className="ev-row">
                    <span className="ev-mono">ECO-003</span>
                    <span className="ev-muted">Silverado 2021 · 67,800 km</span>
                  </div>
                  <div className="ev-row">
                    <span>Cambio aceite + pastillas delanteras</span>
                    <span className="ev-muted">2h MO</span>
                  </div>
                </div>
              </div>
              <span className="flow-bar"></span>
            </div>

            {/* Step 2 */}
            <div
              className={`flow-step${active === 1 ? " is-active" : ""}`}
              data-step-idx="1"
              tabIndex={0}
              role="button"
              onClick={() => onStepClick(1)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onStepClick(1)}
            >
              <div className="flow-head">
                <span className="num">2</span>
                <span className="ti">Cotización automática</span>
                <span className="chip amber" style={{ fontSize: "11px" }}>Pendiente</span>
              </div>
              <div className="flow-detail">
                <p className="sub">Llega a tu plataforma con foto, diagnóstico y desglose para aprobar con un clic.</p>
                <div className="flow-evidence">
                  <div className="ev-row">
                    <span>Total</span>
                    <span className="ev-mono ev-strong">$5,450</span>
                  </div>
                  <div className="ev-row">
                    <span className="ev-muted">3 piezas · 1 foto adjunta</span>
                    <span className="ev-muted">hace 12 min</span>
                  </div>
                </div>
              </div>
              <span className="flow-bar"></span>
            </div>

            {/* Step 3 */}
            <div
              className={`flow-step${active === 2 ? " is-active" : ""}`}
              data-step-idx="2"
              tabIndex={0}
              role="button"
              onClick={() => onStepClick(2)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onStepClick(2)}
            >
              <div className="flow-head">
                <span className="num">3</span>
                <span className="ti">Aprobación y coordinación</span>
                <span className="chip red" style={{ fontSize: "11px" }}>Aprobado</span>
              </div>
              <div className="flow-detail">
                <p className="sub">Apruebas el servicio desde Fleetmool y el taller comienza a trabajar.</p>
                <div className="flow-evidence ok">
                  <span className="ev-check">✓</span>
                  <span>Aprobado por <b>Guillermo Torres</b> · 14:32</span>
                </div>
              </div>
              <span className="flow-bar"></span>
            </div>

            {/* Step 4 */}
            <div
              className={`flow-step${active === 3 ? " is-active" : ""}`}
              data-step-idx="3"
              tabIndex={0}
              role="button"
              onClick={() => onStepClick(3)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onStepClick(3)}
            >
              <div className="flow-head">
                <span className="num">4</span>
                <span className="ti">Historial actualizado</span>
                <span className="chip green" style={{ fontSize: "11px" }}>Completado</span>
              </div>
              <div className="flow-detail">
                <p className="sub">Al finalizar, el historial del vehículo se actualiza automáticamente.</p>
                <div className="flow-evidence">
                  <div className="ev-row">
                    <span>Historial · <span className="ev-mono">ECO-003</span></span>
                    <span className="ev-mono ev-strong">+1 servicio</span>
                  </div>
                  <div className="ev-row">
                    <span className="ev-muted">$5,450 · 2h paro · 67,800 km</span>
                  </div>
                </div>
              </div>
              <span className="flow-bar"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
