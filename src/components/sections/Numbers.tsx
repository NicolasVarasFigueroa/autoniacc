// components/sections/Numbers.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "../shared/Container";

type Stat = { label: string; value: number | string; suffix?: string };

const STATS: Stat[] = [
  { label: "procesos automatizados", value: 20, suffix: "+" },
  { label: "empresas apoyadas en Chile", value: 15, suffix: "+" },
  { label: "automatización personalizada", value: 100, suffix: "%" },
  { label: "enfoque en eficiencia", value: 100, suffix: "%" },
];

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      {/* fondo sutil con aurora + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(22rem 22rem at 20% 10%, rgba(166,198,226,.25), transparent 60%), radial-gradient(20rem 20rem at 80% 90%, rgba(21,45,94,.20), transparent 60%)",
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="mx-auto max-w-5xl rounded-3xl bg-box-bg/90 backdrop-blur border border-box-border 
                     shadow-[0_10px_30px_-12px_rgba(21,45,94,0.18)] overflow-hidden"
        >
          {/* borde superior con gradiente */}
          <div
            aria-hidden
            className="h-[3px] w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(21,45,94,1) 0%, rgba(63,97,170,1) 50%, rgba(166,198,226,1) 100%)",
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-box-border">
            {STATS.map((s, i) => (
              <StatCard key={i} index={i} {...s} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

/* =========================
 *  Card de estadística
 * ========================= */
function StatCard({
  label,
  value,
  suffix = "",
  index,
}: Stat & { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  // contador progresivo (solo para valores numéricos)
  const isNumber = typeof value === "number";
  const [display, setDisplay] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!isNumber || !inView) return;
    let raf = 0;
    const duration = 1100; // ms
    const start = performance.now();
    const from = 0;
    const to = value as number;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumber, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.98 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18, delay: index * 0.04 }}
      className="group relative px-5 py-5 sm:py-7 text-center"
    >
      {/* halo decorativo on-hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(18rem 10rem at 50% 0%, rgba(166,198,226,0.18), transparent 60%)",
        }}
      />

      {/* número grande */}
      <div className="relative inline-flex items-baseline gap-1">
        <span className="font-semibold text-2xl sm:text-3xl md:text-4xl 
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-[rgb(21,45,94)] via-[rgb(63,97,170)] to-[rgb(166,198,226)]
                         drop-shadow-[0_0_10px_rgba(166,198,226,0.15)]">
          {isNumber ? (display as number) : (display as string)}
        </span>
        {suffix && (
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-heading-2">
            {suffix}
          </span>
        )}
      </div>

      {/* etiqueta */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.25, delay: 0.1 + index * 0.03 }}
        className="mt-2 text-sm sm:text-base text-heading-3"
      >
        {label}
      </motion.p>

      {/* underline animada */}
      <motion.span
        aria-hidden
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "52%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
        className="block mx-auto mt-3 h-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(21,45,94,.9), rgba(166,198,226,.9))",
        }}
      />
    </motion.div>
  );
}
  