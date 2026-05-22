import type { MetaFunction } from "@remix-run/cloudflare";

export const handle = { bodyPage: "f4w", bodyAccent: "blue" };

export const meta: MetaFunction = () => [
  { title: "F4W — Tu taller, digitalizado en minutos" },
  {
    name: "description",
    content:
      "La plataforma para talleres modernos. Gestiona servicios, genera cotizaciones y conecta tu taller directamente con flotas. 3 meses gratis.",
  },
];

export default function F4W() {
  return (
    <main className="container" style={{ paddingTop: 120 }}>
      <h1>F4W</h1>
      <p>Sections land in Phase 5.</p>
    </main>
  );
}
