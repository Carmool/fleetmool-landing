import type { MetaFunction } from "@remix-run/cloudflare";

export const handle = { bodyPage: "index" };

export const meta: MetaFunction = () => [
  { title: "Fleetmool — Inteligencia operacional para tu flota" },
  {
    name: "description",
    content:
      "Plataforma de gestión de flotas con IA. Mantenimiento predictivo, diagnósticos en tiempo real y conexión directa con talleres. Para México y LATAM.",
  },
];

export default function Index() {
  return (
    <main style={{ padding: 40, color: "white", background: "#0D0B0A", minHeight: "100vh" }}>
      <h1>Fleetmool — scaffolding alive</h1>
      <p>This placeholder gets replaced section-by-section in later tasks.</p>
    </main>
  );
}
