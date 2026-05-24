import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";

import globalsHref from "./styles/globals.css?url";
import { useSmoothAnchor } from "~/hooks/useSmoothAnchor";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..900;1,400..700&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },
  { rel: "stylesheet", href: globalsHref },
];

type RouteHandle = { bodyPage?: string; bodyAccent?: string };

export default function App() {
  const matches = useMatches();
  const leafHandle = (matches[matches.length - 1]?.handle ?? {}) as RouteHandle;
  useSmoothAnchor();

  return (
    <html lang="es" data-lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body data-page={leafHandle.bodyPage} data-accent={leafHandle.bodyAccent}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
