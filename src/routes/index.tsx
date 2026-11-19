import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { previewPathPrefix } from "@/lib/preview-path-prefix";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [src, setSrc] = useState("/trench-survivor.html");

  useEffect(() => {
    const prefix = previewPathPrefix(window.location.hostname, window.location.pathname) ?? "";
    const next = `${prefix}/trench-survivor.html${window.location.search}`;
    if (next !== "/trench-survivor.html") setSrc(next);
  }, []);

  return <iframe title="Trench Survivor trading terminal" src={src} className="game-frame" />;
}
