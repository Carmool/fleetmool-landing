import { Reveal } from "./Reveal";

export function FeatureStories() {
  return (
    <section className="section features" id="platform">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">Para flotas</div>
          <h2 className="h-1">
            Tres herramientas que cambian<br />cómo operas tu flota.
          </h2>
          <p className="lede">
            Visibilidad, coordinación con talleres e inteligencia operacional. Para gestores que necesitan respuestas — no más sistemas.
          </p>
        </Reveal>

        {/* STORY 1: Real-time visibility */}
        <Reveal className="feature-story">
          <div className="feature-text">
            <div className="feature-eyebrow">
              <span className="feature-num">01</span>
              <span className="feature-cat">Visibilidad</span>
            </div>
            <h3>Cada vehículo, cada estado, cada kilómetro.</h3>
            <p className="body">
              Una sola pantalla con el estado real de tu flota. Filtra por sucursal, tipo de vehículo o estado. Encuentra cualquier vehículo, su historial y documentación en segundos.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <span className="mk">1</span>
                <div className="body">
                  <b>Estado en tiempo real.</b>{" "}
                  <span>Ubicación, kilometraje y disponibilidad sin actualizar.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">2</span>
                <div className="body">
                  <b>Documentación al día.</b>{" "}
                  <span>Pólizas, verificaciones, permisos y vencimientos en un lugar.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">3</span>
                <div className="body">
                  <b>Multi-flota.</b>{" "}
                  <span>Maneja varias empresas o sucursales desde una cuenta.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-art" id="feat-art-1">
            {/* Stylized live map / vehicle list */}
            <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "4px" }}>Operación · Hoy</div>
                  <div style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.018em" }}>42 vehículos en ruta</div>
                </div>
                <span className="chip green dot">En vivo</span>
              </div>
              {/* Map placeholder w/ pins */}
              <div style={{ position: "relative", flex: 1, background: "linear-gradient(180deg, var(--surface-2), var(--surface))", borderRadius: "var(--r-md)", border: "1px solid var(--line)", overflow: "hidden" }}>
                {/* subtle road lines via radial */}
                <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.7 }}>
                  <path d="M0,60 Q100,40 200,80 T400,100" stroke="rgba(255,248,235,0.10)" strokeWidth="1.5" fill="none" />
                  <path d="M0,160 Q100,180 200,140 T400,160" stroke="rgba(255,248,235,0.08)" strokeWidth="1.5" fill="none" />
                  <path d="M80,0 Q90,80 60,140 T100,240" stroke="rgba(255,248,235,0.06)" strokeWidth="1.5" fill="none" />
                  <path d="M280,0 Q300,80 320,140 T280,240" stroke="rgba(255,248,235,0.06)" strokeWidth="1.5" fill="none" />
                </svg>
                {/* Pins */}
                <div style={{ position: "absolute", top: "22%", left: "18%" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 0 4px rgba(21,128,61,0.18), 0 0 0 8px rgba(21,128,61,0.08)" }}></div>
                </div>
                <div style={{ position: "absolute", top: "35%", left: "38%" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 0 4px rgba(21,128,61,0.18), 0 0 0 8px rgba(21,128,61,0.08)" }}></div>
                </div>
                <div style={{ position: "absolute", top: "48%", left: "62%" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--amber)", boxShadow: "0 0 0 4px rgba(180,83,9,0.18)" }}></div>
                </div>
                <div style={{ position: "absolute", top: "65%", left: "25%" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--green)" }}></div>
                </div>
                <div style={{ position: "absolute", top: "70%", left: "78%" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--red)", boxShadow: "0 0 0 4px rgba(159,31,46,0.22), 0 0 0 10px rgba(159,31,46,0.08)" }}></div>
                </div>
                {/* Popover card on the red pin */}
                <div style={{ position: "absolute", top: "30%", left: "55%", background: "var(--surface)", borderRadius: "10px", boxShadow: "var(--shadow-md)", padding: "12px 14px", minWidth: "180px", border: "1px solid var(--line-2)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 600, color: "var(--ink)", marginBottom: "3px" }}>ECO-004</div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "8px" }}>Nissan NP300 · 89,450 km</div>
                  <div style={{ fontSize: "11px", color: "var(--red-text)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--red-text)" }}></span>
                    Mantto. requerido
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12px", color: "var(--ink-3)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)" }}></span>
                  En ruta (42)
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--amber)" }}></span>
                  En taller (6)
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--red)" }}></span>
                  Alertas (3)
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* STORY 2: Workshop coordination */}
        <Reveal className="feature-story flip">
          <div className="feature-text">
            <div className="feature-eyebrow blue">
              <span className="feature-num">02</span>
              <span className="feature-cat">Coordinación</span>
            </div>
            <h3>Del taller a tu tablero, sin un solo correo.</h3>
            <p className="body">
              Cuando un taller usa F4W para registrar un servicio, aparece automáticamente en tu plataforma. Cotizaciones, aprobaciones y avances en tiempo real — todo documentado.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <span className="mk" style={{ background: "var(--blue-tint)", borderColor: "var(--blue-soft)", color: "var(--blue-text)" }}>1</span>
                <div className="body">
                  <b>Cotizaciones digitales.</b>{" "}
                  <span>Aprueba o rechaza sin llamar al taller.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk" style={{ background: "var(--blue-tint)", borderColor: "var(--blue-soft)", color: "var(--blue-text)" }}>2</span>
                <div className="body">
                  <b>Historial auditable.</b>{" "}
                  <span>Cada conversación, foto y diagnóstico queda registrado.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk" style={{ background: "var(--blue-tint)", borderColor: "var(--blue-soft)", color: "var(--blue-text)" }}>3</span>
                <div className="body">
                  <b>Múltiples talleres.</b>{" "}
                  <span>Conecta los talleres que ya usas, en el orden que prefieras.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-art">
            <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "4px" }}>Cotizaciones pendientes</div>
                  <div style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.018em" }}>3 esperan tu aprobación</div>
                </div>
                <span className="chip amber" style={{ fontSize: "11px" }}>2 urgentes</span>
              </div>

              {/* Cotización 1 (approved) */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "12px", padding: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600 }}>ECO-003</span>
                      <span className="chip green" style={{ fontSize: "10.5px" }}>Aprobada</span>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--ink-2)" }}>Auto Expert MTY · Cambio de aceite + frenos</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "15px", fontWeight: 600 }}>$5,450</div>
                    <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>Aprobada · 14:32</div>
                  </div>
                </div>
              </div>

              {/* Cotización 2 (pending) */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--line-2)", borderRadius: "12px", padding: "14px", boxShadow: "0 0 0 3px rgba(180,83,9,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600 }}>ECO-007</span>
                      <span className="chip amber" style={{ fontSize: "10.5px" }}>Pendiente</span>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--ink-2)" }}>Servicio Diesel Pro · Diagnóstico inyectores</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "15px", fontWeight: 600 }}>$8,200</div>
                    <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>hace 12 min</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>Aprobar</button>
                  <button className="btn btn-secondary btn-sm" style={{ flex: 1, justifyContent: "center" }}>Ver detalle</button>
                </div>
              </div>

              {/* Cotización 3 */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "12px", padding: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600 }}>ECO-012</span>
                      <span className="chip gray" style={{ fontSize: "10.5px" }}>Borrador</span>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--ink-2)" }}>Llantera del Bajío · Rotación + balanceo</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "15px", fontWeight: 600 }}>$2,100</div>
                    <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>hace 1 h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* STORY 3: Reports / intelligence */}
        <Reveal className="feature-story">
          <div className="feature-text">
            <div className="feature-eyebrow">
              <span className="feature-num">03</span>
              <span className="feature-cat">Inteligencia</span>
            </div>
            <h3>Decisiones de flota basadas en datos, no en sensaciones.</h3>
            <p className="body">
              Costos por vehículo, tiempos de paro, frecuencia de servicios, comparativo de talleres. Los reportes que necesitas para presupuestar y negociar, no para llenar una carpeta.
            </p>
            <div className="feature-points">
              <div className="feature-point">
                <span className="mk">1</span>
                <div className="body">
                  <b>Costo por kilómetro.</b>{" "}
                  <span>Sabrás cuánto cuesta operar cada vehículo.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">2</span>
                <div className="body">
                  <b>Tiempo de paro.</b>{" "}
                  <span>Identifica qué vehículos y talleres te frenan.</span>
                </div>
              </div>
              <div className="feature-point">
                <span className="mk">3</span>
                <div className="body">
                  <b>Exportable.</b>{" "}
                  <span>CSV, PDF y conexión vía API.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-art">
            <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "4px" }}>Costo de mantenimiento</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <div style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.022em" }}>$284,300</div>
                  <div style={{ fontSize: "13px", color: "var(--green-bright)", fontWeight: 600 }}>↓ 38% vs trim. anterior</div>
                </div>
              </div>

              {/* Bar chart */}
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "8px", padding: "14px 0 20px", position: "relative" }}>
                <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: "30px", backgroundImage: "linear-gradient(180deg, transparent calc(25% - 1px), var(--line) 25%, transparent calc(25% + 1px), transparent calc(50% - 1px), var(--line) 50%, transparent calc(50% + 1px), transparent calc(75% - 1px), var(--line) 75%, transparent calc(75% + 1px))" }}></div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", position: "relative", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "65%", background: "var(--surface-4)", borderRadius: "4px 4px 0 0" }}></div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>Ene</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "78%", background: "var(--surface-4)", borderRadius: "4px 4px 0 0" }}></div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>Feb</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "88%", background: "var(--surface-4)", borderRadius: "4px 4px 0 0" }}></div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>Mar</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "72%", background: "var(--surface-4)", borderRadius: "4px 4px 0 0" }}></div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>Abr</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "55%", background: "var(--red-soft)", borderRadius: "4px 4px 0 0" }}></div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>May</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "42%", background: "var(--red-soft)", borderRadius: "4px 4px 0 0" }}></div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)" }}>Jun</div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 1 }}>
                  <div style={{ width: "100%", height: "38%", background: "var(--red)", borderRadius: "4px 4px 0 0", position: "relative" }}>
                    <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "var(--ink)", color: "var(--bg)", fontSize: "11px", padding: "4px 8px", borderRadius: "6px", whiteSpace: "nowrap", fontWeight: 600 }}>$28.4k</div>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--ink)", fontWeight: 600 }}>Jul</div>
                </div>
              </div>

              {/* Stat row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid var(--line)", paddingTop: "14px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "2px" }}>$/km flota</div>
                  <div style={{ fontSize: "18px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>$2.41</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "2px" }}>Paro promedio</div>
                  <div style={{ fontSize: "18px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>1.4 días</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--ink-3)", marginBottom: "2px" }}>Talleres activos</div>
                  <div style={{ fontSize: "18px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>14</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
