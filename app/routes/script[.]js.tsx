import type { LoaderFunction } from "@remix-run/cloudflare";

export const loader: LoaderFunction = () =>
  new Response("/* legacy */", {
    headers: { "Content-Type": "text/javascript; charset=utf-8" },
  });
