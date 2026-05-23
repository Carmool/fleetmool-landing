import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { Hero } from "~/components/Hero";
import { TrustBar } from "~/components/TrustBar";
import { EcoTabs } from "~/components/EcoTabs";
import { FeatureStories } from "~/components/FeatureStories";
import { AiViz } from "~/components/AiViz";
import { ConnectedFlow } from "~/components/ConnectedFlow";

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
      <Hero />
      <TrustBar />
      <EcoTabs />
      <FeatureStories />
      <AiViz />
      <ConnectedFlow />
      <Footer />
    </>
  );
}
