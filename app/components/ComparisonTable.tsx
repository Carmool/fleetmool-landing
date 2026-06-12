import { Reveal } from "./Reveal";

export function ComparisonTable() {
  return (
    <section className="section connected" id="comparacion">
      <div className="container">
        <Reveal className="sec-head centered">
          <h2 className="h1">
            La manera tradicional
            <br />
            vs. con F4W.
          </h2>
          <p className="lede">
            Así opera la mayoría de los talleres en México hoy. F4W cambia cada uno de esos pasos.
          </p>
        </Reveal>

        <Reveal stagger={1} className="compare">
          <div className="compare-row head">
            <div className="col"></div>
            <div className="col">Manera tradicional</div>
            <div className="col us">Con F4W</div>
          </div>
          <div className="compare-row">
            <div className="col label">Cotizaciones</div>
            <div className="col them">A mano o en Excel</div>
            <div className="col us">En 90 segundos</div>
          </div>
          <div className="compare-row">
            <div className="col label">Historial de vehículos</div>
            <div className="col them">Cuaderno o de memoria</div>
            <div className="col us">Centralizado al instante</div>
          </div>
          <div className="compare-row">
            <div className="col label">Comunicación con flotas</div>
            <div className="col them">WhatsApp sin registro</div>
            <div className="col us">Sincronizado en tiempo real</div>
          </div>
          <div className="compare-row">
            <div className="col label">Aprobación de servicios</div>
            <div className="col them">Verbal, sin evidencia</div>
            <div className="col us">Digital con trazabilidad</div>
          </div>
          <div className="compare-row">
            <div className="col label">Avisar al cliente</div>
            <div className="col them">Llamada manual</div>
            <div className="col us">WhatsApp automático</div>
          </div>
          <div className="compare-row">
            <div className="col label">Tiempo de inicio</div>
            <div className="col them">Semanas de capacitación</div>
            <div className="col us">Tu equipo listo en 30 min</div>
          </div>
          <div className="compare-row">
            <div className="col label">Costo mensual</div>
            <div className="col them">Software caro o nada</div>
            <div className="col us">$69/mes · 3 meses gratis</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
