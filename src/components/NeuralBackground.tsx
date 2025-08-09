"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function NeuralBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } }, // usamos el fondo de la página
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: { onHover: { enable: true, mode: "attract" }, resize: { enable: true } },
        modes: { attract: { distance: 200, duration: 0.4, factor: 3 } },
      },
      particles: {
        color: { value: "#a6c6e2" }, // accent
        links: { enable: true, color: "#a6c6e2", distance: 140, opacity: 0.35, width: 1 },
        move: { enable: true, speed: 0.9, outModes: "bounce" },
        number: { density: { enable: true, area: 900 }, value: 60 },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    []
  );

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} className="fixed inset-0 -z-10 pointer-events-none" />;
}
