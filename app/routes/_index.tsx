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
    <main className="container" style={{ paddingTop: 120 }}>
      <h1>Fleetmool</h1>
      <p>Sections land in Phase 5.</p>
    </main>
  );
}
