"use client";

import { useEffect, useState } from "react";
import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "#", text: "Inicio" },
  { href: "#services", text: "Servicios" },
  { href: "#about-us", text: "Nosotros" },
  { href: "#pricing", text: "Precios" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "shadow-[0_10px_30px_-12px_rgba(21,45,94,0.25)]" : ""}`}>
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-b-3xl brand-gradient opacity-25 blur-md" />
        <div className="backdrop-blur bg-white/60 dark:bg-black/30 border-b border-white/10">
          <Container>
            <nav className="h-16 flex items-center justify-between">
              {/* Logo + nombre */}
              <a href="/" className="flex items-center gap-3 group">
                <span className="relative grid place-items-center">
                  <img src={logo} alt="vexIA" className="w-9 h-9" />
                  <span className="pointer-events-none absolute inset-0 rounded-full blur-lg brand-gradient opacity-0 group-hover:opacity-100 transition" />
                </span>
                <span className="font-semibold tracking-tight text-heading-1">
                  vex<span className="text-transparent bg-clip-text brand-gradient">IA</span>
                </span>
              </a>

              {/* Nav desktop */}
              <ul className="hidden lg:flex items-center gap-1 text-heading-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group relative px-3 py-2 rounded-md hover:text-heading-1
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                    >
                      <span>{item.text}</span>
                      <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-px scale-x-0 origin-left brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA + toggle + burger */}
              <div className="flex items-center gap-2">
                <a
                  href="#cta"
                  className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm
                             bg-primary text-[rgb(var(--ink-inverse))] hover:opacity-90 transition
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  Empecemos
                </a>

                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  aria-label="Cambiar tema"
                  className="relative grid place-items-center rounded-full p-2 border border-white/10
                             hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  {theme === "dark" ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
                      <path d="M12 3v2m6.364.636l-1.414 1.414M21 12h-2m-.636 6.364l-1.414-1.414M12 19v2M6.05 17.95l-1.414 1.414M5 12H3m3.05-5.95L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </button>

                {/* Burger */}
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Abrir menú"
                  className="lg:hidden relative grid place-items-center rounded-md p-2 border border-white/10
                             hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  <div className="w-5 space-y-1.5">
                    <span className={`block h-[2px] rounded bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
                    <span className={`block h-[2px] rounded bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block h-[2px] rounded bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
                  </div>
                </button>
              </div>
            </nav>
          </Container>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="backdrop-blur bg-black/40 border-b border-white/10">
          <Container>
            <ul className="py-4 grid gap-1 text-heading-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-white/5 transition
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 bg-primary text-[rgb(var(--ink-inverse))] hover:opacity-90 transition"
                >
                  Empecemos
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </header>
  );
};
