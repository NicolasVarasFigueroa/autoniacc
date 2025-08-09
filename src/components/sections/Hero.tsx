// components/sections/Hero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";
import PhoneMock from "../PhoneMock";

/* =========================
 * Variants
 * ========================= */
const fadeUp: Variants = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
} satisfies Variants;

const cardIn: Variants = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.18 } },
};

/* =========================
 * Hero principal
 * ========================= */
export const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-36">
      {/* Fondo aurora + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-20 w-[28rem] h-[28rem] sm:w-[40rem] sm:h-[40rem] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(21,45,94,0.6), transparent 60%)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[26rem] h-[26rem] sm:w-[36rem] sm:h-[36rem] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle at 70% 60%, rgba(166,198,226,0.55), transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(21,45,94,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,45,94,.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 70%)",
          }}
        />
      </div>

      <Container className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        {/* Mock iPhone auto-cycling */}
        <motion.div
          initial={{ y: 16, opacity: 0, scale: 0.985 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="relative lg:flex-1 w-full grid place-items-center"
        >
          <div
            className="absolute -z-10 bottom-6 h-20 sm:h-24 w-48 sm:w-60 rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(166,198,226,0.35), transparent 60%)" }}
          />
          <div className="w-full max-w-[320px] sm:max-w-[360px]">
            <AutoCyclingPhone />
          </div>
          <div className="mt-3 text-heading-3 text-xs sm:text-sm opacity-80 text-center">
            App móvil con IA: Órdenes • Stock • BI
          </div>
        </motion.div>

        {/* Texto + Título + Eslogan */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 lg:flex-1 max-w-3xl"
        >
          {/* Overline */}
          <motion.div 
  variants={fadeUp} 
  className="inline-flex items-center gap-2 rounded-full border border-box-border bg-[rgb(21,45,94)] text-white px-3 py-1 text-[12px] sm:text-[13px] shadow-md"
>
  <span className="inline-block h-2 w-2 rounded-full bg-white" />
  Plataforma de Automatización + BI con IA
</motion.div>


          {/* Título profesional */}
          <motion.h1
            variants={fadeUp}
            className="mt-3 text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight text-heading-1"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(21,45,94)] to-[rgb(166,198,226)]">
              Plataforma de Automatización + BI con IA
            </span>
          </motion.h1>

          {/* Eslogan animado rotando */}
          <motion.div variants={fadeUp} className="mt-3 text-heading-2 text-lg sm:text-xl font-medium tracking-tight">
            <SloganTicker
              items={[
                "Automatiza. Decide. Escala.",
                "Menos operativa, más resultados.",
                "Tus datos, convertidos en acción.",
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Paragraph className="mt-5">
              Conectamos <strong>WhatsApp y Web</strong>, automatizamos tareas y te entregamos
              <strong> conclusiones de IA</strong> en tu app móvil para decidir rápido: stock, órdenes, BI y más.
            </Paragraph>
          </motion.div>

          <motion.ul
            variants={stagger}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-heading-3"
          >
            {[
              "✓ Integración WhatsApp/Web",
              "✓ Recomendaciones en lenguaje natural",
              "✓ Alertas y KPIs en vivo",
              "✓ Implementación 2–4 semanas",
            ].map((item) => (
              <motion.li key={item} variants={fadeUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-7 flex flex-col sm:flex-row gap-4">
            <Button className="text-white hover:scale-[1.02] transition" onClick={() => setOpen(true)}>
              Ver demo en vivo
            </Button>

            {/* Contraste agregado para “Solicitar propuesta” */}
            <a
              href="#pricing"
              className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[rgb(21,45,94)] to-[rgb(166,198,226)] hover:opacity-90 transition shadow-md hover:shadow-lg text-center"
              aria-label="Ir a precios y solicitar propuesta"
            >
              Solicitar propuesta
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <Numbers />

      {/* Modal Demo en vivo */}
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

/* =========================
 * Eslogan con rotación
 * ========================= */
function SloganTicker({ items }: { items: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 2200);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <div className="h-[1.8em] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="absolute inset-0"
        >
          {items[idx]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* =========================
 * Auto-cycling iPhone (home)
 * ========================= */
type ScreenKey = "ordenes" | "stock" | "bi";

function AutoCyclingPhone() {
  const [screen, setScreen] = useState<ScreenKey>("ordenes");
  const [ordersCount, setOrdersCount] = useState(0);
  const [biTick, setBiTick] = useState(0);

  // ciclo pantallas
  useEffect(() => {
    const seq: ScreenKey[] = ["ordenes", "stock", "bi"];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % seq.length;
      setScreen(seq[i]);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // loop órdenes (añade 1,1,1,1, luego reinicia)
  useEffect(() => {
    let mounted = true;
    const ordersTotal = 4;
    const run = async () => {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      while (mounted) {
        for (let i = 1; i <= ordersTotal; i++) {
          if (!mounted) return;
          setOrdersCount(i);
          await sleep(650);
        }
        await sleep(1000);
        setOrdersCount(0);
        await sleep(400);
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, []);

  // loop bi: re-render para animar barras
  useEffect(() => {
    const id = setInterval(() => setBiTick((t) => t + 1), 5000);
    return () => clearInterval(id);
  }, []);

  const Content = useMemo(() => {
    if (screen === "ordenes") return <PhoneOrders count={ordersCount} />;
    if (screen === "stock") return <PhoneStock />;
    return <PhoneBI tick={biTick} />;
  }, [screen, ordersCount, biTick]);

  return (
    <PhoneMock>
      <div className="h-full w-full bg-[#f7f2f0] text-black flex flex-col">
        <StatusBar time="17:53" dark />
        <TopBar
          title={screen === "ordenes" ? "Órdenes" : screen === "stock" ? "Stock" : "BI / Auditoría"}
          leftIcon={<Back />}
          rightIcon={screen === "stock" ? <Scan /> : <Dots />}
          dark
          classy
        />
        <Tabs active={screen === "ordenes" ? "Órdenes" : screen === "stock" ? "Stock" : "IA"} />

        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen + "-" + (screen === "bi" ? String(biTick) : "")}
              variants={cardIn}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute inset-0"
            >
              {Content}
            </motion.div>
          </AnimatePresence>
        </div>

        <IASuggestion>
          {screen === "stock" ? (
            <>
              Te faltan <b>20 panes</b>. Prepara más antes de las <b>19:00</b>.
            </>
          ) : screen === "ordenes" ? (
            <>
              Nuevo pico a las <b>19:15</b>. Prioriza <b>retiro</b> sobre despacho.
            </>
          ) : (
            <>
              Ganancia estimada <b>+12%</b>. Refuerza promo 2x1 <b>18:00–20:00</b>.
            </>
          )}
        </IASuggestion>
      </div>
    </PhoneMock>
  );
}

/* =========================
 * Modal de demo en vivo
 * ========================= */
function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [screen, setScreen] = useState<ScreenKey>("ordenes");
  const [autoplay, setAutoplay] = useState(true);
  const [tick, setTick] = useState(0);

  // autoplay
  useEffect(() => {
    if (!open || !autoplay) return;
    const seq: ScreenKey[] = ["ordenes", "stock", "bi"];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % seq.length;
      setScreen(seq[i]);
      setTick((t) => t + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [open, autoplay]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <button
            aria-label="Cerrar demo"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-[91] w-full max-w-4xl rounded-2xl border border-box-border bg-box-bg shadow-xl"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            {/* Header modal */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-box-border">
              <div className="text-heading-1 font-semibold">
                Demo en vivo — <span className="text-heading-2">App móvil con IA</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={autoplay}
                    onChange={(e) => setAutoplay(e.target.checked)}
                  />
                  Autoplay
                </label>
                <button
                  onClick={onClose}
                  className="rounded-full border border-box-border px-3 py-1 text-sm hover:bg-box-bg"
                >
                  Cerrar
                </button>
              </div>
            </div>

            {/* Body modal */}
            <div className="grid md:grid-cols-[1fr_360px] gap-6 p-5">
              {/* Texto lateral */}
              <div className="space-y-3">
                <h3 className="text-heading-1 text-xl font-semibold">Mira el flujo completo</h3>
                <Paragraph>
                  Cambia entre <strong>Órdenes</strong>, <strong>Stock</strong> y{" "}
                  <strong>BI/IA</strong>. Conclusiones de IA y micro‑animaciones muestran cómo tu
                  operación cobra vida en tiempo real.
                </Paragraph>
                <div className="flex flex-wrap gap-2 pt-2">
                  {(["ordenes", "stock", "bi"] as ScreenKey[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => {
                        setScreen(k);
                        setTick((t) => t + 1);
                      }}
                      className={`px-3 py-1.5 rounded-full border text-sm ${
                        screen === k ? "bg-[rgb(21,45,94)]/90 text-white" : "border-box-border"
                      }`}
                    >
                      {k === "ordenes" ? "Órdenes" : k === "stock" ? "Stock" : "BI/IA"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone grande */}
              <div className="justify-self-center">
                <div className="w-[320px] sm:w-[360px]">
                  <PhoneMock>
                    <div className="h-full w-full bg-[#f7f2f0] text-black flex flex-col">
                      <StatusBar time="17:53" dark />
                      <TopBar
                        title={screen === "ordenes" ? "Órdenes" : screen === "stock" ? "Stock" : "BI / Auditoría"}
                        leftIcon={<Back />}
                        rightIcon={screen === "stock" ? <Scan /> : <Dots />}
                        dark
                        classy
                      />
                      <Tabs active={screen === "ordenes" ? "Órdenes" : screen === "stock" ? "Stock" : "IA"} />
                      <div className="relative flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={screen + "-" + tick}
                            variants={cardIn}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="absolute inset-0"
                          >
                            {screen === "ordenes" ? (
                              <PhoneOrders count={4} />
                            ) : screen === "stock" ? (
                              <PhoneStock />
                            ) : (
                              <PhoneBI tick={tick} />
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <IASuggestion>
                        {screen === "stock" ? (
                          <>
                            Te faltan <b>20 panes</b>. Prepara más antes de las <b>19:00</b>.
                          </>
                        ) : screen === "ordenes" ? (
                          <>
                            Nuevo pico a las <b>19:15</b>. Prioriza <b>retiro</b> sobre despacho.
                          </>
                        ) : (
                          <>
                            Ganancia estimada <b>+12%</b>. Refuerza promo 2x1 <b>18:00–20:00</b>.
                          </>
                        )}
                      </IASuggestion>
                    </div>
                  </PhoneMock>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================
 * Pantallas del Phone (compartidas)
 * ========================= */
function PhoneOrders({ count }: { count: number }) {
  type Estado = "Entregado" | "En curso";
  const ORDERS: Array<{ id: number; txt: string; hora: string; estado: Estado }> = [
    { id: 101, txt: "Completo x1 + bebida", hora: "18:05", estado: "Entregado" },
    { id: 102, txt: "Completo x2", hora: "18:21", estado: "En curso" },
    { id: 103, txt: "Pizza mediana", hora: "18:39", estado: "Entregado" },
    { id: 104, txt: "Completo x2 + bebida", hora: "19:00", estado: "En curso" },
  ];
  const visible = ORDERS.slice(0, Math.max(0, Math.min(count, ORDERS.length)));

  return (
    <div className="absolute inset-0 px-2.5 py-2 text-[10px] sm:text-[11px] space-y-1.5">
      <div className="font-semibold text-[12px] sm:text-[13px]">
        Órdenes realizadas <span className="text-black/50">(hoy)</span>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white/85 shadow-sm divide-y min-h-[116px]">
        {visible.map((o, i) => (
          <motion.div
            key={o.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: i * 0.03 }}
            className="flex items-center justify-between px-3 py-2"
          >
            <div className="flex items-center gap-2.5">
              <Avatar />
              <div>
                <div className="font-semibold leading-tight text-[12px]">
                  #{o.id} — {o.txt}
                </div>
                <div className="text-[10px] text-black/55">Hora {o.hora}</div>
              </div>
            </div>
            <Badge state={o.estado} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PhoneStock() {
  return (
    <div className="absolute inset-0 px-2.5 py-2 text-[10px] sm:text-[11px] space-y-2">
      <div className="font-semibold text-[12px] sm:text-[13px]">
        Stock disponible <span className="text-black/50">(actual)</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <CardStat label="Pan" value="20 un." trend="-23%" />
        <CardStat label="Salchichas" value="18 un." />
        <CardStat label="Bebidas" value="12 un." />
        <CardStat label="Aderezos" value="OK" />
      </div>
    </div>
  );
}

function PhoneBI({ tick }: { tick: number }) {
  const bars = [22, 35, 18, 42, 30, 51, 27, 39];
  return (
    <div className="absolute inset-0 px-2.5 py-2 text-[10px] sm:text-[11px] space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <KPI label="Ventas hoy" value="$ 432k" />
        <KPI label="Margen" value="28%" />
        <KPI label="Tickets" value="148" />
      </div>
      <div>
        <div className="text-[10px] text-black/60 mb-1">Ventas por hora</div>
        <div
          key={tick}
          className="h-20 rounded-xl border border-black/10 bg-white/80 p-1.5 flex items-end gap-1 shadow-sm"
        >
          {bars.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ type: "spring", stiffness: 140, damping: 18, delay: i * 0.03 }}
              className={`flex-1 rounded-md ${
                i % 2 === 0 ? "bg-[rgb(166,198,226)]" : "bg-[rgb(21,45,94)]/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
 * Micro UI helpers
 * ========================= */
function StatusBar({ time, dark }: { time: string; dark?: boolean }) {
  return (
    <div
      className={`px-2.5 py-1.5 flex items-center justify-between text-[9px] ${
        dark ? "text-black/70" : "text-black/60"
      } bg-white/70 backdrop-blur-sm border-b border-black/10`}
    >
      <span>{time}</span>
      <span className="flex items-center gap-1 opacity-70">
        <span className="w-2 h-1 rounded-sm bg-black/50" />
        <span className="w-3 h-1 rounded-sm bg-black/50" />
        <span className="w-4 h-1 rounded-sm bg-black/50" />
      </span>
    </div>
  );
}

function TopBar({
  title,
  leftIcon,
  rightIcon,
  dark,
  classy,
}: {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  dark?: boolean;
  classy?: boolean;
}) {
  return (
    <div
      className={`px-2.5 py-1.5 flex items-center justify-between border-b bg-white ${
        dark ? "border-black/10" : "border-black/10"
      } ${classy ? "shadow-sm" : ""}`}
      style={
        classy
          ? { background: "linear-gradient(180deg, rgba(166,198,226,.28) 0%, rgba(255,255,255,.85) 70%)" }
          : undefined
      }
    >
      <div className="w-6 h-6 grid place-items-center">{leftIcon}</div>
      <div className={`text-[12px] font-semibold ${dark ? "text-black" : "text-black"}`}>{title}</div>
      <div className="w-6 h-6 grid place-items-center">{rightIcon}</div>
    </div>
  );
}

function Tabs({ active }: { active: "Órdenes" | "Stock" | "IA" }) {
  const tabs: Array<"Órdenes" | "Stock" | "IA"> = ["Órdenes", "Stock", "IA"];
  return (
    <div className="px-2.5 pt-2">
      <div className="grid grid-cols-3 text-[10px] rounded-2xl p-[3px] border border-black/10 bg-white/70 shadow-sm">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <div
              key={t}
              className={`text-center py-1 rounded-xl transition font-medium ${
                isActive ? "bg-[rgb(21,45,94)]/90 text-white shadow" : "text-black/70 hover:bg-black/[.04]"
              }`}
            >
              {t}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function IASuggestion({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto p-2.5">
      <div className="rounded-2xl border border-[rgb(166,198,226)]/30 bg-[rgb(166,198,226)]/15 p-2 text-[10px] sm:text-[11px] leading-relaxed shadow-sm">
        <div className="text-[9px] text-black/60 mb-1">Sugerencia de IA</div>
        {children}
      </div>
    </div>
  );
}

function CardStat({ label, value, trend }: { label: string; value: string; trend?: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/85 p-2 relative overflow-hidden shadow-sm">
      <div className="text-[10px] text-black/60">{label}</div>
      <div className="text-[13px] font-semibold text-[rgb(21,45,94)]">{value}</div>
      {trend && <span className="absolute top-2 right-2 text-[9px] text-rose-500">{trend}</span>}
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      className="rounded-2xl border border-black/10 bg-white/85 p-2 shadow-sm"
    >
      <div className="text-[10px] text-black/60">{label}</div>
      <div className="text-[13px] font-semibold text-[rgb(21,45,94)]">{value}</div>
    </motion.div>
  );
}

function Avatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-[rgb(21,45,94)]/12 grid place-items-center text-[11px] text-[rgb(21,45,94)] shadow-inner">
      <span>🍔</span>
    </div>
  );
}

function Badge({ state }: { state: "Entregado" | "En curso" }) {
  const isOk = state === "Entregado";
  return (
    <span
      className={`text-[10px] px-2 py-0.5 rounded-full border font-medium shadow-sm ${
        isOk
          ? "bg-[rgb(166,198,226)]/35 border-[rgb(166,198,226)]/45 text-[rgb(21,45,94)]"
          : "bg-amber-100 border-amber-200 text-amber-700"
      }`}
    >
      {state}
    </span>
  );
}

/* === Iconos === */
function Back() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Dots() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function Scan() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7V5a1 1 0 011-1h2M19 7V5a1 1 0 00-1-1h-2M4 17v2a1 1 0 001 1h2M19 17v2a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
