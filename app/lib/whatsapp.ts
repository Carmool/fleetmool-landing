export const WA_NUMBER = "525573221028";

export const PRESETS = {
  fleetmool: {
    signin: "Hola! Quisiera iniciar sesión en Fleetmool",
    trial: "Hola! Quiero iniciar mi prueba gratuita de Fleetmool",
    demo: "Hola! Quisiera ver una demo de Fleetmool",
  },
  f4w: {
    signin: "Hola! Quisiera iniciar sesión en F4W",
    trial: "Hola! Quiero registrar mi taller en F4W",
    demo: "Hola! Quisiera ver una demo de F4W",
    pro: "Hola! Quiero registrar mi taller en F4W Pro",
    enterprise: "Hola! Quisiera información sobre F4W Multi-sucursal",
  },
} as const;

export type Surface = keyof typeof PRESETS;
export type Preset<S extends Surface> = keyof (typeof PRESETS)[S];

export function whatsappUrl<S extends Surface>(surface: S, preset: Preset<S>): string {
  const message = PRESETS[surface][preset];
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
