import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

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
    <>
      <Nav surface="fleetmool" />
      {/* Hero lands in Task 21; further sections in Tasks 22-28 */}
      <Footer />
    </>
  );
}
