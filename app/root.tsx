import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import type { HeadersFunction, LinksFunction } from "@remix-run/cloudflare";
import { useEffect } from "react";

import globalsHref from "./styles/globals.css?url";
import { useSmoothAnchor } from "~/hooks/useSmoothAnchor";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate",
});

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/fleetmool-favicon.svg" },
  { rel: "stylesheet", href: globalsHref },
];

type RouteHandle = { bodyPage?: string; bodyAccent?: string };

export default function App() {
  const matches = useMatches();
  const leafHandle = (matches[matches.length - 1]?.handle ?? {}) as RouteHandle;
  useSmoothAnchor();

  useEffect(() => {
    document.documentElement.classList.add("hydrated");
  }, []);

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
