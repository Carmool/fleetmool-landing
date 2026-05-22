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
    <main style={{ padding: 40, color: "white", background: "#0D0B0A", minHeight: "100vh" }}>
      <h1>F4W — scaffolding alive</h1>
      <p>This placeholder gets replaced section-by-section in later tasks.</p>
    </main>
  );
}
