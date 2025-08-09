"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function MobileDemoScreen() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick((x) => (x + 1) % 8), 2000); return () => clearInterval(t); }, []);
  const bars = useMemo(() => [22, 35, 18, 42, 30, 51, 27, 39], []);

  return (
    <div className="h-full w-full text-white">
      <div className="flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur">
        <div className="text-sm text-white/70">Miido • Panel</div>
        <div className="text-sm text-white/70">17:52</div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <KPI title="Ventas hoy" value="$ 432.500" delta="+12%" />
        <KPI title="Tickets" value="148" delta="+5%" />
        <KPI title="Ticket prom." value="$ 2.920" delta="+3%" />
        <KPI title="Stock pan" value="20 un." delta="-23%" negative />
      </div>

      {/* Gráfico */}
      <div className="px-4 pt-2">
        <div className="text-xs text-white/60 mb-2">Ventas por hora</div>
        <div className="h-32 w-full rounded-xl border border-white/10 bg-white/5 p-3 flex items-end gap-2 overflow-hidden">
          {bars.map((v, i) => {
            const active = i === tick;
            return (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`flex-1 rounded-t-md ${active ? "bg-[rgb(166,198,226)]" : "bg-[rgb(21,45,94)]/70"}`}
              />
            );
          })}
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="px-4 mt-4 space-y-2">
        <Item text="Peak esperado 18:00–20:00. Prepara insumos." />
        <Item text="Los completos bajan 15% vs. ayer. Revisa precio/promoción." />
      </div>

      {/* Banner IA */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-3"
      >
        <div className="rounded-2xl border border-[rgb(166,198,226)]/15 bg-[#06080b]/90 backdrop-blur p-3">
          <div className="text-xs text-white/60 mb-1">Sugerencia de IA</div>
          <div className="text-sm leading-relaxed">
            Te faltan <b>20 panes</b> para que se te acabe el stock. Sugerencia:
            prepara más antes de las <b>19:00</b> para cubrir el peak.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function KPI({ title, value, delta, negative }: { title: string; value: string; delta: string; negative?: boolean }) {
  return (
    <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 140, damping: 14 }}
      className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/60">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
      <div className={`text-[11px] ${negative ? "text-rose-400" : "text-[rgb(166,198,226)]"}`}>{delta}</div>
    </motion.div>
  );
}
function Item({ text }: { text: string }) {
  return (
    <motion.div initial={{ x: 12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 140, damping: 16 }}
      className="text-xs text-white/80 bg-white/5 border border-white/10 rounded-lg p-2">
      {text}
    </motion.div>
  );
}
