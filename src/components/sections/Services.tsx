// components/sections/Services.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import PhoneMock from "../PhoneMock";

const fadeUp: Variants = {
  hidden: { y: 18, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

/* =========================
 *  Componente principal
 * ========================= */
export const Services = () => {
  // ====== CHAT LOOP ROBUSTO (async/await)
  type Remitente = "user" | "bot";
  type ChatMsg = { from: Remitente; text: string; id: string };

  const CHAT_BASE_GAP = 900;
  const CHAT_LOOP_PAUSE = 1200;

  const CHAT_SCRIPT: Array<{ from: Remitente; text: string; typingMs?: number; pauseMs?: number }> =
    [
      { from: "user", text: "Hola, quiero 2 completos y 1 bebida." },
      { from: "bot", text: "¡Hola! ¿Para qué hora lo necesitas?", typingMs: 800 },
      { from: "user", text: "Para las 19:00, por favor." },
      { from: "bot", text: "Perfecto, pedido #104 confirmado ✅", typingMs: 900 },
    ];

  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState<Remitente | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const uid = () =>
      (globalThis.crypto as any)?.randomUUID
        ? (globalThis.crypto as any).randomUUID()
        : `${Date.now()}_${Math.random()}`;

    async function run() {
      while (!cancelled) {
        setMsgs([]);
        setTyping(null);
        await sleep(300);

        for (const step of CHAT_SCRIPT) {
          if (cancelled) return;

          if (step.from === "bot") {
            setTyping("bot");
            await sleep(step.typingMs ?? 650);
            if (cancelled) return;
            setTyping(null);
          }

          setMsgs((p) => [...p, { from: step.from, text: step.text, id: uid() }]);
          await sleep(CHAT_BASE_GAP + (step.pauseMs ?? 0));
        }

        await sleep(CHAT_LOOP_PAUSE);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  // autoscroll suave
  useEffect(() => {
    if (!chatRef.current) return;
    chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  return (
    <section id="services" className="relative py-10 sm:py-12">
      {/* fondo suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(26rem 26rem at 8% 10%, rgba(21,45,94,.10), transparent 60%), radial-gradient(24rem 24rem at 92% 80%, rgba(166,198,226,.16), transparent 60%)",
        }}
      />

      <Container className="space-y-8 sm:space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <Title>Del chat a la operación: todo conectado</Title>
          <Paragraph>
            El <strong>agente de WhatsApp</strong> toma el pedido y lo reparte a{" "}
            <strong>Órdenes</strong>, <strong>Stock</strong> y <strong>BI/Auditoría</strong>.
            Cada módulo incluye <span className="text-primary font-semibold">conclusiones IA</span>.
          </Paragraph>
        </div>

        {/* === WhatsApp arriba — iPhone compacto === */}
        <div className="relative grid place-items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            className="relative"
          >
            <PhoneMock size="xs">
              {/* WhatsApp estilizado */}
              <div className="h-full w-full flex flex-col bg-[#e8f5e9]">
                <StatusBar time="17:52" />
                <TopBar title="Agente • WhatsApp" rightIcon={<Dots />} dark={false} classy />
                <div
                  ref={chatRef}
                  className="flex-1 p-3 overflow-y-auto overscroll-contain bg-gradient-to-b from-white/40 to-transparent min-h-[160px] sm:min-h-[180px]"
                >
                  {msgs.map((msg) => {
                    const user = msg.from === "user";
                    return (
                      <Bubble key={msg.id} user={user}>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.18 }}
                        >
                          {msg.text}
                        </motion.span>
                      </Bubble>
                    );
                  })}

                  {typing === "bot" && (
                    <div className="mb-2 flex justify-end">
                      <div className="px-3.5 py-2.5 rounded-2xl shadow-sm ring-1 ring-black/5 bg-[rgb(166,198,226)]/70 text-[rgb(16,43,83)]">
                        <TypingDots />
                      </div>
                    </div>
                  )}
                </div>
                <BottomInput />
              </div>
            </PhoneMock>

            <div className="mt-1 text-heading-3 text-center text-xs sm:text-[13px] font-medium">
              Agente por WhatsApp
            </div>
          </motion.div>

          {/* Líneas solo desktop */}
          <ConnectorsTopToBottom />
        </div>

        {/* === Tres mockups abajo — compactos y pro === */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 place-items-center">
          <MockOrders />
          <MockStock />
          <MockBI />
        </div>
      </Container>
    </section>
  );
};

/* =========================
 *  Mockups destino (compactos + estilizados)
 * ========================= */

function MockOrders() {
  // loop de órdenes (aparecen una a una y reinician)
  type Estado = "Entregado" | "En curso";
  const ORDERS: Array<{ id: number; txt: string; hora: string; estado: Estado }> = [
    { id: 101, txt: "Completo x1 + bebida", hora: "18:05", estado: "Entregado" },
    { id: 102, txt: "Completo x2", hora: "18:21", estado: "En curso" },
    { id: 103, txt: "Pizza mediana", hora: "18:39", estado: "Entregado" },
    { id: 104, txt: "Completo x2 + bebida", hora: "19:00", estado: "En curso" },
  ];

  const [count, setCount] = useState(0);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      while (!cancelled) {
        for (let i = 1; i <= ORDERS.length; i++) {
          if (cancelled) return;
          setCount(i);
          await sleep(700);
        }
        await sleep(1400);
        setCount(0);
        await sleep(400);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = ORDERS.slice(0, count);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      className="relative"
    >
      <PhoneMock size="xs">
        <div className="h-full w-full bg-[#f7f2f0] text-black flex flex-col">
          <StatusBar time="17:53" dark />
          <TopBar title="Órdenes" leftIcon={<Back />} rightIcon={<Bell />} dark classy />
          <Tabs active="Órdenes" />

          <div className="px-2.5 py-2 text-[10px] sm:text-[11px] space-y-1.5">
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

          <IASuggestion>
            Nuevo pico a las <b>19:15</b>. Prioriza <b>retiro</b> sobre despacho.
          </IASuggestion>
        </div>
      </PhoneMock>

      <div className="mt-1 text-heading-3 text-center text-xs font-medium">Órdenes</div>
    </motion.div>
  );
}

function MockStock() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      className="relative"
    >
      <PhoneMock size="xs">
        <div className="h-full w-full bg-[#f7f2f0] text-black flex flex-col">
          <StatusBar time="17:53" dark />
          <TopBar title="Stock" leftIcon={<Back />} rightIcon={<Scan />} dark classy />
          <Tabs active="Stock" />

          <div className="px-2.5 py-2 text-[10px] sm:text-[11px] space-y-2">
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

          <IASuggestion>
            Te faltan <b>20 panes</b> para cubrir demanda. Prepara más antes de las <b>19:00</b>.
          </IASuggestion>
        </div>
      </PhoneMock>

      <div className="mt-1 text-heading-3 text-center text-xs font-medium">Stock</div>
    </motion.div>
  );
}

function MockBI() {
  // key para relanzar anim de barras en loop
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 6000);
    return () => clearInterval(id);
  }, []);

  const bars = [22, 35, 18, 42, 30, 51, 27, 39];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      className="relative"
    >
      <PhoneMock size="xs">
        <div className="h-full w-full bg-[#f7f2f0] text-black flex flex-col">
          <StatusBar time="17:53" dark />
          <TopBar title="BI / Auditoría" leftIcon={<Back />} rightIcon={<Dots />} dark classy />
          <Tabs active="IA" />

          <div className="px-2.5 py-2 text-[10px] sm:text-[11px] space-y-3">
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2">
              <KPI label="Ventas hoy" value="$ 432k" />
              <KPI label="Margen" value="28%" />
              <KPI label="Tickets" value="148" />
            </div>

            {/* Barras animadas en loop */}
            <div>
              <div className="text-[10px] text-black/60 mb-1">Ventas por hora</div>
              <div
                key={tick}
                className="h-16 sm:h-20 rounded-xl border border-black/10 bg-white/80 p-1.5 flex items-end gap-1 shadow-sm"
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

          <IASuggestion>
            Ganancia estimada del día <b>+12%</b>. Refuerza promo 2x1 <b>18:00–20:00</b>.
          </IASuggestion>
        </div>
      </PhoneMock>

      <div className="mt-1 text-heading-3 text-center text-xs font-medium">BI / Auditoría</div>
    </motion.div>
  );
}

/* =========================
 *  Conectores Top → Bottom (solo desktop)
 * ========================= */
function ConnectorsTopToBottom() {
  return (
    <svg
      className="pointer-events-none absolute -z-10 hidden lg:block"
      style={{ width: "100%", height: "110px", bottom: "-96px" }}
      viewBox="0 0 1200 110"
      preserveAspectRatio="none"
    >
      {/* Gradientes y glow */}
      <defs>
        <linearGradient id="wireLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(166,198,226,1)" />
          <stop offset="45%" stopColor="rgba(166,198,226,.9)" />
          <stop offset="100%" stopColor="rgba(21,45,94,.95)" />
        </linearGradient>
        <linearGradient id="wireCenter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(166,198,226,1)" />
          <stop offset="60%" stopColor="rgba(21,45,94,.95)" />
          <stop offset="100%" stopColor="rgba(21,45,94,.85)" />
        </linearGradient>
        <linearGradient id="wireRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(21,45,94,.95)" />
          <stop offset="55%" stopColor="rgba(166,198,226,.9)" />
          <stop offset="100%" stopColor="rgba(166,198,226,1)" />
        </linearGradient>

        <filter id="wireGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rutas */}
      <AnimatedWire d="M 600 6 C 520 42, 420 78, 300 100" grad="url(#wireLeft)" duration={2.8} delay={0.0} />
      <AnimatedWire d="M 600 6 C 600 42, 600 78, 600 100" grad="url(#wireCenter)" duration={3.0} delay={0.15} />
      <AnimatedWire d="M 600 6 C 680 42, 780 78, 900 100" grad="url(#wireRight)" duration={3.2} delay={0.3} />
    </svg>
  );
}

function AnimatedWire({
  d,
  grad,
  duration,
  delay = 0,
}: {
  d: string;
  grad: string;
  duration: number;
  delay?: number;
}) {
  return (
    <>
      {/* base tenue */}
      <path d={d} fill="none" stroke="rgba(166,198,226,.25)" strokeWidth="2" />
      {/* glow */}
      <path d={d} fill="none" stroke={grad as any} strokeWidth="2.5" filter="url(#wireGlow)" opacity="0.9" />
      {/* dash animado encima */}
      <motion.path
        d={d}
        fill="none"
        stroke={grad as any}
        strokeWidth="2.5"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay }}
        opacity="0.9"
      />

      {/* tres “viajeros” */}
      <Traveler d={d} grad={grad} duration={duration} delay={delay + 0.0} />
      <Traveler d={d} grad={grad} duration={duration} delay={delay + 0.35} />
      <Traveler d={d} grad={grad} duration={duration} delay={delay + 0.7} />
    </>
  );
}

function Traveler({
  d,
  grad,
  duration,
  delay,
}: {
  d: string;
  grad: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.circle
      r="4.5"
      fill={grad as any}
      style={{ offsetPath: `path('${d}')` } as any}
      initial={{ offsetDistance: "0%", opacity: 0.0, scale: 0.9 }}
      animate={{
        offsetDistance: "100%",
        opacity: [0, 1, 1, 0],
        scale: [0.9, 1.1, 1.1, 0.9],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* =========================
 *  UI “componentitos” de app
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
  classy?: boolean; // gradiente sutil + sombra
}) {
  return (
    <div
      className={`px-2.5 py-1.5 flex items-center justify-between border-b bg-white ${
        dark ? "border-black/10" : "border-black/10"
      } ${classy ? "shadow-sm" : ""}`}
      style={
        classy
          ? {
              background:
                "linear-gradient(180deg, rgba(166,198,226,.28) 0%, rgba(255,255,255,.85) 70%)",
            }
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

function Bubble({ user, children }: { user: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: user ? -26 : 26, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`px-3.5 py-2.5 mb-2 rounded-2xl max-w-[78%] shadow-sm ring-1 ring-black/5 ${
        user ? "bg-white self-start" : "self-end ml-auto text-[rgb(16,43,83)] bg-[rgb(166,198,226)]/80"
      }`}
      style={{ backdropFilter: "saturate(110%) blur(2px)" }}
    >
      {children}
    </motion.div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[rgb(21,45,94)]/80"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

function BottomInput() {
  return (
    <div className="p-2.5 flex items-center gap-2 bg-[#e8f5e9] border-t border-black/10">
      <div className="flex-1 h-8 rounded-full bg-white/90 border border-black/10 shadow-sm px-3 text-[10px] flex items-center text-black/50">
        Escribe un mensaje
      </div>
      <div className="w-8 h-8 rounded-full grid place-items-center bg-green-500 shadow text-white">
        <svg width="12" height="12" viewBox="0 0 24 24">
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
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

/* === Iconitos simples === */
function Back() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        d="M15 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Bell() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m3 0v1a2 2 0 11-4 0v-1h4z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Dots() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function Scan() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        d="M4 7V5a1 1 0 011-1h2M19 7V5a1 1 0 00-1-1h-2M4 17v2a1 1 0 001 1h2M19 17v2a1 1 0 01-1 1h-2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
