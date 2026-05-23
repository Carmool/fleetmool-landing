import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

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
    <>
      <Nav surface="f4w" />
      {/* F4W sections land in Tasks 30-32 */}
      <Footer />
    </>
  );
}
