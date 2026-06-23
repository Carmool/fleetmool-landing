import { Reveal } from "./Reveal";

const WaIcon = () => (
  <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.8-.4-1.7-.9-2.4-1.6-.7-.8-1.3-1.7-1.5-2.5-.1-.3 0-.4.2-.6l.7-.7c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.2-.2-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

export function F4WFeatures() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">Para talleres</div>
          <h2 className="h1">
            Tres herramientas que cambian<br />cómo trabaja tu taller.
          </h2>
          <p className="lede">
            Ingreso de servicios, cotizaciones instantáneas y conexión con flotas. Listo en minutos, no en semanas.
          </p>
        </Reveal>

        {/* STORY 1: Cotizaciones */}
        <Reveal className="feature-story">
          <div className="feature-text">
            <div className="feature-eyebrow">
              <span className="feature-num">01</span>
              <span className="feature-cat">Cotizaciones</span>
            </div>
            <h3>Cotiza en 90 segundos.<br />Envía con un toque.</h3>
            <p className="body">
              Captura diagnóstico, piezas y mano de obra. F4W genera la cotización con tu formato,
              lista para enviar por WhatsApp o aprobar dentro de Fleetmool.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <span className="mk">1</span>
                <div className="body">
                  <b>Plantillas inteligentes.</b>{" "}
                  <span>Servicios frecuentes y piezas precargadas.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">2</span>
                <div className="body">
                  <b>PDF profesional.</b>{" "}
                  <span>Con tu logo, dirección y datos fiscales.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">3</span>
                <div className="body">
                  <b>Aprobación digital.</b>{" "}
                  <span>El cliente aprueba en línea — todo queda registrado.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-art">
            <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "4px" }}>Nueva cotización</div>
                  <div style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.018em" }}>OS-2846 · Silverado 2021</div>
                  <div style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "2px" }}>Logística Noroeste · ECO-003 · 67,800 km</div>
                </div>
                <span className="chip blue" style={{ fontSize: "11px" }}>90 s</span>
              </div>

              <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: "10px", padding: "14px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, paddingBottom: "8px", borderBottom: "1px solid var(--line)" }}>
                  <span>Concepto</span>
                  <span>Importe</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "var(--ink-2)" }}>Manguera de frenos (1)</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>$1,800</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "var(--ink-2)" }}>Pastillas freno trasero (2)</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>$1,680</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "var(--ink-2)" }}>Mano de obra · 2h</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>$800</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px", marginTop: "auto", borderTop: "1px solid var(--line-2)", fontSize: "15px", fontWeight: 600 }}>
                  <span>Total</span>
                  <span style={{ fontFamily: "var(--font-mono)" }}>$4,280 MXN</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>
                  <WaIcon />
                  Enviar por WhatsApp
                </button>
                <button className="btn btn-secondary btn-sm" style={{ justifyContent: "center" }}>PDF</button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* STORY 2: Ecosistema / fleet connection */}
        <Reveal className="feature-story flip">
          <div className="feature-text">
            <div className="feature-eyebrow">
              <span className="feature-num">02</span>
              <span className="feature-cat">Ecosistema</span>
            </div>
            <h3>Conecta con flotas — sin cambiar cómo trabajas.</h3>
            <p className="body" style={{ padding: "15px 0px" }}>
              Tus clientes de flota ven en tiempo real cada servicio que pasa por tu taller en su plataforma
              Fleetmool. Tú sigues operando F4W como siempre. La sincronización es automática.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <span className="mk">1</span>
                <div className="body">
                  <b>Cero captura doble.</b>{" "}
                  <span>Lo que registras en F4W aparece en Fleetmool.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">2</span>
                <div className="body">
                  <b>Cliente más confiado.</b>{" "}
                  <span>Trazabilidad completa, fotos y diagnósticos auditables.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">3</span>
                <div className="body">
                  <b>Más flotas te buscan.</b>{" "}
                  <span>Aparece en la red de talleres conectados de Fleetmool.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-art">
            <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "4px" }}>Sincronización</div>
                  <div style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.018em" }}>Tu taller ↔ 4 flotas</div>
                </div>
                <span className="chip green dot" style={{ fontSize: "11px" }}>En vivo</span>
              </div>

              {/* F4W side */}
              <div style={{ background: "var(--bg-2)", border: "1px solid var(--blue-soft)", borderRadius: "12px", padding: "14px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "var(--blue)", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>W</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13.5px", fontWeight: 600 }}>Tu taller · F4W</div>
                  <div style={{ fontSize: "12px", color: "var(--blue-text)" }}>Registra servicio · envía cotización</div>
                </div>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--blue-text)", boxShadow: "0 0 0 3px var(--blue-tint)" }}></span>
              </div>

              {/* Animated connector */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <svg width="2" height="20" viewBox="0 0 2 20" fill="none">
                  <line x1="1" y1="0" x2="1" y2="20" stroke="var(--green-soft)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                <div style={{ padding: "5px 12px", background: "var(--green-tint)", border: "1px solid var(--green-soft)", borderRadius: "100px", display: "inline-flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green-bright)", boxShadow: "0 0 8px rgba(111,214,147,0.6)" }}></span>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--green-bright)" }}>Datos en tiempo real</span>
                </div>
                <svg width="2" height="20" viewBox="0 0 2 20" fill="none">
                  <line x1="1" y1="0" x2="1" y2="20" stroke="var(--green-soft)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Fleet side */}
              <div style={{ background: "var(--bg-2)", border: "1px solid var(--red-soft)", borderRadius: "12px", padding: "14px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "#9F1F2E", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>F</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "13.5px", fontWeight: 600 }}>Tu cliente · Fleetmool</div>
                  <div style={{ fontSize: "12px", color: "#E78892" }}>Ve servicios · aprueba cotizaciones</div>
                </div>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E78892", boxShadow: "0 0 0 3px rgba(231,136,146,0.2)" }}></span>
              </div>

              <div style={{ fontSize: "11.5px", color: "var(--ink-3)", textAlign: "center", lineHeight: 1.55, paddingTop: "4px" }}>
                Solo invita a tu cliente. La conexión se configura sola.
              </div>
            </div>
          </div>
        </Reveal>

        {/* STORY 3: WhatsApp */}
        <Reveal className="feature-story">
          <div className="feature-text">
            <div className="feature-eyebrow">
              <span className="feature-num">03</span>
              <span className="feature-cat">WhatsApp</span>
            </div>
            <h3>Donde ya hablas con tus clientes.</h3>
            <p className="body">
              F4W trabaja sobre WhatsApp. Envía cotizaciones, recibe aprobaciones y avisa cuando el
              vehículo está listo — desde donde tu cliente ya te escribe.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <span className="mk">1</span>
                <div className="body">
                  <b>Cotizaciones por chat.</b>{" "}
                  <span>Un mensaje con PDF, monto y botón de aprobación.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">2</span>
                <div className="body">
                  <b>Notificaciones automáticas.</b>{" "}
                  <span>"Tu vehículo está listo" sin tocar el teléfono.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">3</span>
                <div className="body">
                  <b>Todo queda registrado.</b>{" "}
                  <span>Conversaciones, fotos y aprobaciones — auditable.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-art" style={{ background: "var(--surface)" }}>
            <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Chat header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "14px", borderBottom: "1px solid var(--line)" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#6F947A", display: "grid", placeItems: "center", color: "var(--bg)", fontWeight: 700, fontSize: "12px" }}>GT</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>Guillermo Torres</div>
                  <div style={{ fontSize: "11.5px", color: "var(--green-bright)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--green-bright)" }}></span>
                    en línea
                  </div>
                </div>
                <svg className="wa-icon" style={{ width: "22px", height: "22px", color: "#25D366" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.8-.4-1.7-.9-2.4-1.6-.7-.8-1.3-1.7-1.5-2.5-.1-.3 0-.4.2-.6l.7-.7c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.2-.2-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
              </div>

              {/* Quote message bubble (from taller) */}
              <div style={{ alignSelf: "flex-start", maxWidth: "78%", background: "var(--surface-2)", border: "1px solid var(--line)", padding: "10px 12px", borderRadius: "14px 14px 14px 4px", fontSize: "13px", lineHeight: 1.45 }}>
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>Cotización OS-2846 · ECO-003</div>
                <div style={{ color: "var(--ink-2)", marginBottom: "8px" }}>Frenos + manguera (3 conceptos)</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>$4,280 MXN</div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ fontSize: "11px", color: "var(--blue-text)", padding: "3px 8px", background: "var(--blue-tint)", border: "1px solid var(--blue-soft)", borderRadius: "99px" }}>📎 cotizacion.pdf</span>
                </div>
                <div style={{ fontSize: "10.5px", color: "var(--ink-3)", marginTop: "6px", textAlign: "right" }}>14:30 ✓✓</div>
              </div>

              {/* Reply (from client) */}
              <div style={{ alignSelf: "flex-end", maxWidth: "60%", background: "var(--green)", color: "var(--ink)", padding: "10px 12px", borderRadius: "14px 14px 4px 14px", fontSize: "13px", lineHeight: 1.4 }}>
                <div>✓ Aprobado. Adelante.</div>
                <div style={{ fontSize: "10.5px", opacity: 0.7, marginTop: "3px", textAlign: "right" }}>14:32</div>
              </div>

              {/* System message */}
              <div style={{ alignSelf: "center", padding: "6px 12px", background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: "99px", fontSize: "11px", color: "var(--ink-3)", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green-bright)" }}></span>
                Sincronizado con Fleetmool
              </div>

              {/* Final message */}
              <div style={{ alignSelf: "flex-start", maxWidth: "60%", background: "var(--surface-2)", border: "1px solid var(--line)", padding: "10px 12px", borderRadius: "14px 14px 14px 4px", fontSize: "13px", lineHeight: 1.45 }}>
                <div>Tu vehículo está listo para recoger 🔧</div>
                <div style={{ fontSize: "10.5px", color: "var(--ink-3)", marginTop: "4px", textAlign: "right" }}>16:15 ✓✓</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
