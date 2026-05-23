import { Reveal } from "./Reveal";

export function CaseStudies() {
  return (
    <section className="section cases">
      <div className="container">
        <Reveal className="sec-head">
          <div className="eyebrow">Historias</div>
          <h2 className="h-1">
            Operaciones reales.
            <br />
            Resultados medibles.
          </h2>
        </Reveal>

        <div className="cases-grid">
          <Reveal className="case">
            <div className="case-result">
              <div>
                <div className="case-result-num red">-52%</div>
                <div className="case-result-lbl">
                  en tiempos de paro durante el primer trimestre
                </div>
              </div>
              <svg className="case-chart" viewBox="0 0 100 50" fill="none">
                <path
                  d="M0,18 L14,22 L28,16 L42,28 L56,32 L70,38 L84,44 L100,46"
                  stroke="var(--red)"
                  strokeWidth="1.5"
                />
                <path
                  d="M0,18 L14,22 L28,16 L42,28 L56,32 L70,38 L84,44 L100,46 L100,50 L0,50 Z"
                  fill="var(--red-soft)"
                  opacity="0.4"
                />
              </svg>
            </div>
            <div className="case-body">
              <div className="case-company">Logística Noroeste</div>
              <p className="case-quote">
                &ldquo;Redujimos los tiempos de mantenimiento a la mitad y ahora
                tenemos visibilidad completa de cada vehículo. El equipo lo
                adoptó en días.&rdquo;
              </p>
              <div className="case-author">
                <span className="av">GT</span>
                <div>
                  <div className="n">Guillermo Torres</div>
                  <div className="r">Director de Operaciones</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal stagger={1} className="case">
            <div className="case-result">
              <div>
                <div className="case-result-num green">+100%</div>
                <div className="case-result-lbl">
                  trazabilidad: todo documentado y auditable
                </div>
              </div>
              <svg className="case-chart" viewBox="0 0 100 50" fill="none">
                <rect x="2" y="34" width="8" height="14" fill="var(--green)" opacity="0.4" />
                <rect x="14" y="28" width="8" height="20" fill="var(--green)" opacity="0.5" />
                <rect x="26" y="22" width="8" height="26" fill="var(--green)" opacity="0.6" />
                <rect x="38" y="18" width="8" height="30" fill="var(--green)" opacity="0.7" />
                <rect x="50" y="14" width="8" height="34" fill="var(--green)" opacity="0.8" />
                <rect x="62" y="10" width="8" height="38" fill="var(--green)" opacity="0.9" />
                <rect x="74" y="6" width="8" height="42" fill="var(--green)" />
                <rect x="86" y="2" width="8" height="46" fill="var(--green)" />
              </svg>
            </div>
            <div className="case-body">
              <div className="case-company">Transportes del Golfo</div>
              <p className="case-quote">
                &ldquo;La integración con nuestros talleres cambió todo. Ya no
                hay comunicación por WhatsApp sin registro. Todo queda
                documentado.&rdquo;
              </p>
              <div className="case-author">
                <span className="av">AR</span>
                <div>
                  <div className="n">Ana Ramírez</div>
                  <div className="r">Gerente de Flota</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal stagger={2} className="case">
            <div className="case-result">
              <div>
                <div className="case-result-num">3</div>
                <div className="case-result-lbl">
                  fallas mayores evitadas en un mes con IA predictiva
                </div>
              </div>
              <svg className="case-chart" viewBox="0 0 100 50" fill="none">
                <circle cx="20" cy="30" r="3" fill="var(--amber)" />
                <circle cx="48" cy="20" r="3" fill="var(--amber)" />
                <circle cx="78" cy="14" r="3" fill="var(--amber)" />
                <path
                  d="M20,30 L48,20 L78,14"
                  stroke="var(--amber)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path
                  d="M0,38 L100,8"
                  stroke="var(--ink-4)"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
              </svg>
            </div>
            <div className="case-body">
              <div className="case-company">Distribuidora Central MX</div>
              <p className="case-quote">
                &ldquo;El mantenimiento predictivo evitó tres fallas mayores en
                un mes. El ROI fue evidente desde las primeras semanas.&rdquo;
              </p>
              <div className="case-author">
                <span className="av">CM</span>
                <div>
                  <div className="n">Carlos Mendizábal</div>
                  <div className="r">Gerente de Operaciones</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
