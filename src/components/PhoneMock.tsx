// components/PhoneMock.tsx
import React from "react";

type Size = "xs" | "sm" | "md" | "lg";

const MAP: Record<Size, { w: number; h: number; r: number; notchW: number; notchH: number }> = {
  xs: { w: 220, h: 456, r: 42, notchW: 98, notchH: 18 },
  sm: { w: 260, h: 540, r: 46, notchW: 110, notchH: 20 },
  md: { w: 300, h: 624, r: 50, notchW: 124, notchH: 22 },
  lg: { w: 340, h: 708, r: 56, notchW: 136, notchH: 24 },
};

interface PhoneMockProps {
  /** Si pasas responsive, ignora size y usa tamaños por breakpoint */
  responsive?: boolean;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export default function PhoneMock({
  responsive = false,
  size = "xs",
  className = "",
  children,
}: PhoneMockProps) {
  if (responsive) {
    return (
      <div
        className={`relative select-none ${className}`}
        // tamaños por breakpoint (afinados para encajar en cards)
        // XS ~iPhone mini, LG ~iPhone Pro Max chiquito
        style={{}}
      >
        <div className="relative w-[200px] h-[420px] sm:w-[230px] sm:h-[480px] md:w-[260px] md:h-[540px] lg:w-[300px] lg:h-[620px]">
          {/* sombra */}
          <div
            className="absolute inset-0 rounded-[50px] blur-xl opacity-30 -z-10"
            style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,.35), transparent 70%)" }}
          />
          {/* frame */}
          <div
            className="absolute inset-0 bg-[#0b0f1a]"
            style={{
              borderRadius: "clamp(36px, 8%, 56px)",
              boxShadow:
                "0 2px 6px rgba(0,0,0,.35), 0 16px 40px rgba(0,0,0,.45), inset 0 0 0 2px rgba(255,255,255,.04)",
            }}
          />
          {/* bisel */}
          <div
            className="absolute inset-[6px] bg-[#0e1526]"
            style={{
              borderRadius: "clamp(30px, 7%, 48px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06)",
            }}
          />
          {/* pantalla */}
          <div
            className="absolute inset-[12px] overflow-hidden bg-[#0e1526]"
            style={{ borderRadius: "clamp(24px, 6%, 40px)" }}
          >
            {/* reflejo */}
            <div
              className="pointer-events-none absolute -top-1/3 -left-1/4 w-[140%] h-[120%] opacity-[0.06]"
              style={{
                background:
                  "linear-gradient(35deg, rgba(255,255,255,.9) 0%, transparent 30%, transparent 70%, rgba(255,255,255,.7) 100%)",
              }}
            />
            <div className="relative h-full w-full">{children}</div>
          </div>
          {/* notch proporcional */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[10px] bg-black/85 rounded-full"
               style={{ width: "40%", height: "6%", boxShadow: "inset 0 0 2px rgba(255,255,255,.1)" }}>
            <div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[10%] aspect-square rounded-full bg-[#0a0a0a]" />
          </div>
          {/* botones laterales */}
          <div className="absolute -left-[2px] top-[20%] w-[3px] h-[10%] bg-[#0b0f1a] rounded-r" />
          <div className="absolute -left-[2px] top-[33%] w-[3px] h-[10%] bg-[#0b0f1a] rounded-r" />
          <div className="absolute -right-[2px] top-[27%] w-[3px] h-[14%] bg-[#0b0f1a] rounded-l" />
        </div>
      </div>
    );
  }

  // Tamaño fijo (por si quieres usarlo en otros lados)
  const { w, h, r, notchW, notchH } = MAP[size];
  return (
    <div className={`relative select-none ${className}`} style={{ width: w, height: h }}>
      <div
        className="absolute inset-0 rounded-[56px] blur-xl opacity-30 -z-10"
        style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,.35), transparent 70%)" }}
      />
      <div
        className="absolute inset-0 bg-[#0b0f1a]"
        style={{
          borderRadius: r,
          boxShadow:
            "0 2px 6px rgba(0,0,0,.35), 0 16px 40px rgba(0,0,0,.45), inset 0 0 0 2px rgba(255,255,255,.04)",
        }}
      />
      <div
        className="absolute inset-[6px] bg-[#0e1526]"
        style={{ borderRadius: r - 6, boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06)" }}
      />
      <div
        className="absolute inset-[12px] overflow-hidden bg-[#0e1526]"
        style={{ borderRadius: r - 12 }}
      >
        <div
          className="pointer-events-none absolute -top-1/3 -left-1/4 w-[140%] h-[120%] opacity-[0.06]"
          style={{
            background:
              "linear-gradient(35deg, rgba(255,255,255,.9) 0%, transparent 30%, transparent 70%, rgba(255,255,255,.7) 100%)",
          }}
        />
        <div className="relative h-full w-full">{children}</div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[10px] bg-black/85"
        style={{
          width: notchW,
          height: notchH,
          borderRadius: notchH,
          boxShadow: "inset 0 0 2px rgba(255,255,255,.1)",
        }}
      >
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
      </div>
      <div className="absolute -left-[2px] top-[85px] w-[3px] h-[42px] bg-[#0b0f1a] rounded-r" />
      <div className="absolute -left-[2px] top-[135px] w-[3px] h-[42px] bg-[#0b0f1a] rounded-r" />
      <div className="absolute -right-[2px] top-[115px] w-[3px] h-[64px] bg-[#0b0f1a] rounded-l" />
    </div>
  );
}
