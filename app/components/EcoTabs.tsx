import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useReveal } from "~/hooks/useReveal";

type Side = "fleet" | "workshop";

export function EcoTabs() {
  const [active, setActive] = useState<Side>("fleet");
  const sliderRef = useRef<HTMLSpanElement | null>(null);
  const fleetTabRef = useRef<HTMLButtonElement | null>(null);
  const workshopTabRef = useRef<HTMLButtonElement | null>(null);

  const secHeadRef = useReveal<HTMLDivElement>();

  const position = () => {
    const slider = sliderRef.current;
    const tab = active === "fleet" ? fleetTabRef.current : workshopTabRef.current;
    if (!slider || !tab) return;
    slider.style.width = `${tab.offsetWidth}px`;
    slider.style.transform = `translateX(${tab.offsetLeft - 4}px)`;
  };

  useLayoutEffect(() => {
    position();
    if (typeof document !== "undefined") {
      document.fonts?.ready?.then(position);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const onResize = () => position();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section ecosystem" id="ecosystem">
      <div className="container">
        <div ref={secHeadRef} className="sec-head centered reveal">
          <div className="eyebrow">Ecosistema</div>
          <h2 className="h1">
            Una operación, dos lados.
            <br />
            <span className="text-ink-3">Sin fricción entre ellos.</span>
          </h2>
          <p className="lede">
            Fleetmool para gestores de flota. F4W para los talleres que las mantienen. Mismos datos,
            en tiempo real, sin correos ni PDFs.
          </p>
        </div>

        <Reveal stagger={1} className="eco-switcher-wrap">
          <div className="eco-switcher" id="eco-switcher">
            <span className="eco-tab-slider" id="eco-slider" ref={sliderRef}></span>
            <button
              className={`eco-tab${active === "fleet" ? " active" : ""}`}
              ref={fleetTabRef}
              onClick={() => setActive("fleet")}
              data-side="fleet"
            >
              <span className="mk">F</span>
              <span>Fleetmool</span>
              <span className="role">Para flotas</span>
            </button>
            <button
              className={`eco-tab${active === "workshop" ? " active" : ""}`}
              ref={workshopTabRef}
              onClick={() => setActive("workshop")}
              data-side="workshop"
            >
              <span className="mk">W</span>
              <span>F4W</span>
              <span className="role">Para talleres</span>
            </button>
          </div>
        </Reveal>

        <Reveal stagger={2} className="eco-stage">
          {/* FLEET PANEL */}
          <div className={`eco-panel${active === "fleet" ? " active" : ""}`} data-side="fleet">
            <div className="eco-text">
              <span className="chip red dot">Para gestores de flota</span>
              <h3>Visibilidad total de tu flota, en una sola pantalla.</h3>
              <p className="body">
                Estado en tiempo real, historial completo de mantenimiento y conexión directa con los
                talleres que te atienden. Sin hojas de cálculo, sin grupos de WhatsApp inacabables.
              </p>
              <ul className="eco-features">
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Seguimiento de vehículos.</strong>{" "}
                    <span>Estado, ubicación y kilometraje al instante.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Historial completo.</strong>{" "}
                    <span>Cada servicio, diagnóstico y reparación documentado.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Cotizaciones y aprobaciones.</strong>{" "}
                    <span>Aprueba servicios con un clic, sin perder el control.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Alertas predictivas con IA.</strong>{" "}
                    <span>Anticipa fallas antes de que paren tu operación.</span>
                  </span>
                </li>
              </ul>
              <div className="eco-cta-row">
                <a href="#platform" className="btn btn-primary">
                  Explorar Fleetmool →
                </a>
              </div>
            </div>
            <div className="eco-viz">
              <div className="eco-card-fragment">
                <div className="eco-frag-head">
                  <div className="dot-row">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="url">fleetmool.com/operacion</span>
                </div>
                <div className="eco-frag-body" style={{ padding: 0 }}>
                  {/* Mini fleet dashboard */}
                  <div
                    style={{
                      padding: "16px 18px",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-3)",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Flota · Hoy
                      </div>
                      <span className="chip green dot" style={{ fontSize: "11px" }}>
                        42 activos
                      </span>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "4px" }}>
                          Total
                        </div>
                        <div style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                          48
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "4px" }}>
                          En taller
                        </div>
                        <div
                          style={{
                            fontSize: "22px",
                            fontWeight: 600,
                            color: "var(--amber-bright)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          6
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "4px" }}>
                          Alertas
                        </div>
                        <div
                          style={{
                            fontSize: "22px",
                            fontWeight: 600,
                            color: "var(--red-text)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "12px 18px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 0",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--green)",
                        }}
                      ></span>
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600 }}
                      >
                        ECO-001
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--ink-2)" }}>
                        Toyota Hilux · 45,230 km
                      </span>
                      <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--ink-3)" }}>
                        CDMX
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 0",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--amber)",
                        }}
                      ></span>
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600 }}
                      >
                        ECO-003
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--ink-2)" }}>
                        Silverado · 67,800 km
                      </span>
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: "11px",
                          color: "var(--amber-bright)",
                        }}
                      >
                        Auto Expert
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 0",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--red)",
                        }}
                      ></span>
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600 }}
                      >
                        ECO-004
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--ink-2)" }}>
                        NP300 · 89,450 km
                      </span>
                      <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--red-text)" }}>
                        Agendar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WORKSHOP PANEL */}
          <div
            className={`eco-panel${active === "workshop" ? " active" : ""}`}
            data-side="workshop"
          >
            <div className="eco-text">
              <span className="chip blue dot">Para talleres</span>
              <h3>Digitaliza tu taller y conéctate con flotas que ya te buscan.</h3>
              <p className="body">
                Registra servicios, genera cotizaciones y alimenta datos operacionales directo a tus
                clientes de flota. Sin instalación, listo en minutos.
              </p>
              <ul className="eco-features">
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Ingreso de servicios.</strong>{" "}
                    <span>Diagnóstico, piezas y mano de obra en segundos.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Cotizaciones instantáneas.</strong>{" "}
                    <span>Envío por WhatsApp con un toque.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Conexión automática con flotas.</strong>{" "}
                    <span>Tus clientes ven el progreso en tiempo real.</span>
                  </span>
                </li>
                <li className="eco-feat">
                  <span className="eco-feat-mk">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 16 16">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Onboarding en minutos.</strong>{" "}
                    <span>Cualquier dispositivo, sin instalaciones.</span>
                  </span>
                </li>
              </ul>
              <div className="eco-cta-row">
                <a href="/f4w" className="btn btn-secondary">
                  Explorar F4W →
                </a>
              </div>
            </div>
            <div className="eco-viz">
              <div className="eco-card-fragment">
                <div className="eco-frag-head">
                  <div className="dot-row">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="url">f4w.app/orden/2417</span>
                </div>
                <div className="eco-frag-body" style={{ padding: 0 }}>
                  <div
                    style={{
                      padding: "16px 18px",
                      borderBottom: "1px solid var(--line)",
                      background: "var(--surface-2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--ink-3)",
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          Orden #2417
                        </div>
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          ECO-003 · Silverado 2021
                        </div>
                        <div style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "2px" }}>
                          Logística Noroeste · 67,800 km
                        </div>
                      </div>
                      <span className="chip blue" style={{ fontSize: "11px" }}>
                        F4W
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "12px 18px 8px" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--ink-3)",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}
                    >
                      Diagnóstico
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        borderBottom: "1px solid var(--line)",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ color: "var(--ink-2)" }}>Cambio aceite + filtro</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--ink)",
                          fontWeight: 600,
                        }}
                      >
                        $1,850
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        borderBottom: "1px solid var(--line)",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ color: "var(--ink-2)" }}>Pastillas delanteras</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--ink)",
                          fontWeight: 600,
                        }}
                      >
                        $2,400
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ color: "var(--ink-2)" }}>Mano de obra (2h)</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--ink)",
                          fontWeight: 600,
                        }}
                      >
                        $1,200
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0 6px",
                        borderTop: "1px solid var(--line-2)",
                        marginTop: "6px",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      <span>Total</span>
                      <span style={{ fontFamily: "var(--font-mono)" }}>$5,450</span>
                    </div>
                  </div>
                  <div style={{ padding: "0 18px 16px" }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        background: "var(--blue)",
                        color: "var(--ink)",
                        borderColor: "var(--blue)",
                      }}
                    >
                      Enviar cotización por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
