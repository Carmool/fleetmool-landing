import { useCounter } from "~/hooks/useCounter";
import { Reveal } from "./Reveal";

function Counter({
  target,
  suffix = "",
}: {
  target: string | number;
  suffix?: string;
}) {
  const { ref, text } = useCounter(target, suffix);
  return <span ref={ref}>{text}</span>;
}

export function Metrics() {
  return (
    <section className="section tight metrics">
      <div className="container">
        <div className="sec-head centered reveal" style={{ marginBottom: "36px" }}>
          <div className="eyebrow">Resultados</div>
        </div>
        <Reveal stagger={1} className="metrics-grid">
          <div className="metric">
            <div className="v red">
              <Counter target={500} suffix="+" />
            </div>
            <div className="l">Flotas activas</div>
            <div className="sub">en México y LATAM</div>
          </div>
          <div className="metric">
            <div className="v">40%</div>
            <div className="l">Reducción en costos</div>
            <div className="sub">promedio por flota</div>
          </div>
          <div className="metric">
            <div className="v">98%</div>
            <div className="l">Disponibilidad SLA</div>
            <div className="sub">garantizada por contrato</div>
          </div>
          <div className="metric">
            <div className="v">
              <Counter target={12000} suffix="+" />
            </div>
            <div className="l">Vehículos gestionados</div>
            <div className="sub">y creciendo</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
