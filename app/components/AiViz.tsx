import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const NODE_COUNT = 3;
const BAR_COUNT = 12;
const TICK_MS = 1900;

function randomBars(): number[] {
  return Array.from({ length: BAR_COUNT }, () => 30 + Math.random() * 65);
}

export function AiViz() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [stepIdx, setStepIdx] = useState<number>(-1);
  const [bars, setBars] = useState<number[]>(randomBars);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let started = false;
    let interval: ReturnType<typeof setInterval> | null = null;

    const tick = () => {
      setStepIdx((prev) => {
        const next = (prev + 1) % NODE_COUNT;
        if (next === 0) setBars(randomBars());
        return next;
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            el.classList.add("visible");
            tick();
            interval = setInterval(tick, TICK_MS);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section className="section ai-section" id="ai">
      <div className="container">
        <div className="ai-inner">
          <Reveal className="ai-text">
            <h2 className="h1">La IA trabaja antes de que llegue el problema.</h2>
            <p className="lede">
              Cada kilometraje, cada diagnóstico, cada condición de uso entrena el modelo. Detectamos señales de desgaste con días de anticipación y te avisamos donde ya operas: WhatsApp.
            </p>

            <div className="ai-stats">
              <div className="ai-stat">
                <div className="v">7+</div>
                <div className="l">días de anticipación promedio</div>
              </div>
              <div className="ai-stat">
                <div className="v">94%</div>
                <div className="l">reducción de paros no programados</div>
              </div>
              <div className="ai-stat">
                <div className="v">23%</div>
                <div className="l">ahorro al consolidar servicios</div>
              </div>
            </div>
          </Reveal>

          {/* Animated viz */}
          <div className="ai-viz reveal d1" id="ai-viz" ref={containerRef}>
            <div className="ai-stage" id="ai-stage">
              {/* SENSOR */}
              <div className={`ai-node${stepIdx === 0 ? " active" : ""}`} data-step="0">
                <div className="ai-node-h">
                  <span className="l">Señal</span>
                </div>
                <h4>Sensor</h4>
                <div className="desc">Kilometraje, ciclos de uso y diagnósticos del taller.</div>
                <div className="ai-sensor-vis" id="ai-bars">
                  {bars.map((h, idx) => (
                    <div key={idx} className="ai-sensor-bar" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <span className="pulse"></span>
              </div>

              {/* PREDICTION */}
              <div className={`ai-node${stepIdx === 1 ? " active" : ""}`} data-step="1">
                <div className="ai-node-h">
                  <span className="l">Modelo</span>
                </div>
                <h4>Predicción</h4>
                <div className="desc">Cambio de aceite en 5 días. Confianza 94%.</div>
                <div className="ai-pred-vis">
                  <svg viewBox="0 0 120 36" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="predg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <path className="ai-pred-fill" d="M0,28 L12,26 L24,24 L36,22 L48,19 L60,15 L72,10 L84,6 L96,4 L108,3 L120,2 L120,36 L0,36 Z" />
                    <path className="ai-pred-line" d="M0,28 L12,26 L24,24 L36,22 L48,19 L60,15 L72,10 L84,6 L96,4 L108,3 L120,2" />
                    <circle r="2.5" fill="currentColor" cx="120" cy="2" />
                  </svg>
                </div>
                <span className="pulse"></span>
              </div>

              {/* ACTION */}
              <div className={`ai-node${stepIdx === 2 ? " active" : ""}`} data-step="2">
                <div className="ai-node-h">
                  <span className="l">Acción</span>
                </div>
                <h4>Alerta</h4>
                <div className="desc">ECO-004 agendado con Auto Expert.</div>
                <div className="ai-action-vis">
                  <span className="wa-mini">✓</span>
                  <span>WhatsApp · Notificado</span>
                </div>
                <span className="pulse"></span>
              </div>

              {/* Connectors SVG overlay */}
              <svg className="ai-connectors" preserveAspectRatio="none" viewBox="0 0 600 200">
                <defs>
                  <linearGradient id="connG" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--red-light)" stopOpacity={0} />
                    <stop offset="50%" stopColor="var(--red-light)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="var(--red-light)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <line x1="180" y1="100" x2="220" y2="100" stroke="rgba(255,248,235,0.15)" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="380" y1="100" x2="420" y2="100" stroke="rgba(255,248,235,0.15)" strokeWidth="1" strokeDasharray="2 3" />
                <circle r="3" fill="var(--red-light)" id="ai-particle-1" cx="180" cy="100" opacity={0} />
                <circle r="3" fill="var(--red-light)" id="ai-particle-2" cx="380" cy="100" opacity={0} />
              </svg>
            </div>

            {/* Final outcome bar */}
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "3px" }}>Resultado</div>
                <div style={{ fontSize: "13px", color: "var(--ink)" }}>Paro no programado evitado · ahorro estimado $24,300</div>
              </div>
              <span className="chip green" style={{ borderColor: "rgba(34,197,94,0.3)" }}>+ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
