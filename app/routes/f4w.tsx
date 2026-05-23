import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { F4WHero } from "~/components/F4WHero";
import { F4WTrustBar } from "~/components/F4WTrustBar";
import { F4WFeatures } from "~/components/F4WFeatures";
import { ComparisonTable } from "~/components/ComparisonTable";
import { F4WTestimonial } from "~/components/F4WTestimonial";
import { F4WEcoCallout } from "~/components/F4WEcoCallout";
import { Pricing } from "~/components/Pricing";
import { FinalCta } from "~/components/FinalCta";

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
      <F4WHero />
      <F4WTrustBar />
      <F4WFeatures />
      <ComparisonTable />
      <F4WTestimonial />
      <F4WEcoCallout />
      <Pricing surface="f4w" />
      <FinalCta surface="f4w" />
      <Footer />
    </>
  );
}
