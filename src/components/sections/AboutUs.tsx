// components/sections/AboutUs.tsx
"use client";

import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// ✅ Tipamos el transition
const springIn: Transition = { type: "spring", stiffness: 140, damping: 18 };

// ✅ Y el Variants también
const fadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: springIn },
};

export const AboutUs = () => {
  return (
    <section id="about-us" className="relative py-14 sm:py-16">
      {/* Fondo sutil con auroras y grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(28rem 20rem at 8% 10%, rgba(166,198,226,.20), transparent 60%), radial-gradient(22rem 18rem at 92% 80%, rgba(21,45,94,.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(21,45,94,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,45,94,.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 55%, transparent 80%)",
        }}
      />

      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        {/* Imagen con marco iOS + glow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="w-full md:w-5/12 lg:w-1/2"
        >
          <div className="relative w-full h-80 sm:h-96">
            <div
              aria-hidden
              className="absolute -top-0.5 left-0 right-0 h-[3px] rounded-t-3xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(21,45,94,1) 0%, rgba(63,97,170,1) 50%, rgba(166,198,226,1) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] blur-2xl opacity-40"
              style={{ background: "radial-gradient(60% 60% at 50% 20%, rgba(166,198,226,.35), transparent 60%)" }}
            />
            <div className="relative z-10 h-full w-full rounded-3xl overflow-hidden border border-box-border shadow-[0_18px_40px_-18px_rgba(21,45,94,.25)] bg-box-bg/80 backdrop-blur">
              <img
                src="/assets/autoniac.jpg"
                alt="Equipo vexIA trabajando en automatizaciones"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-box-border/70 bg-box-bg/70 backdrop-blur px-3 py-1 text-xs sm:text-sm shadow">
                  <span className="inline-block h-2 w-2 rounded-full bg-[rgb(63,97,170)]" />
                  Equipo especializado en automatización + BI con IA
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Texto + bullets animados */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="w-full md:w-7/12 lg:w-1/2 flex flex-col"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-block h-2 w-2 rounded-full bg-[rgb(21,45,94)]" />
            <span className="text-xs sm:text-sm text-heading-2">Sobre nosotros</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-heading-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(21,45,94)] via-[rgb(63,97,170)] to-[rgb(166,198,226)]">
              Sobre vexIA
            </span>
          </h2>

          <Paragraph className="mt-3">
            En <strong>vexIA</strong>, creemos que la inteligencia automática debe estar al
            alcance de cualquier negocio. Diseñamos soluciones que eliminan tareas repetitivas,
            conectan tus sistemas y entregan información clave para tomar decisiones más rápidas
            y estratégicas.
          </Paragraph>

          <div className="mt-5 grid grid-cols-2 gap-3 max-w-md">
            {[
              { k: "Implementación 2–4 semanas" },
              { k: "Integraciones WhatsApp/Web" },
              { k: "KPIs y alertas en vivo" },
              { k: "Soporte cercano" },
            ].map((b, i) => (
              <motion.div
                key={b.k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springIn, delay: 0.05 * i }}
                className="rounded-xl border border-box-border bg-box-bg/70 backdrop-blur px-3 py-2 text-xs sm:text-sm flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-[rgb(166,198,226)]" />
                <span className="text-heading-2">{b.k}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <InfoCard
              title="Nuestra misión"
              description="Liberar a las empresas de lo operativo para que puedan enfocarse en crecer, innovar y liderar."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              }
            />
            <InfoCard
              title="Nuestra visión"
              description="Ser la plataforma líder de automatización para negocios inteligentes en Chile."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 4.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
                </svg>
              }
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

function InfoCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={springIn}
      className="relative p-5 sm:p-6 rounded-2xl border border-box-border bg-box-bg/80 backdrop-blur shadow-[0_10px_30px_-12px_rgba(21,45,94,.15)] group overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(14rem 8rem at 30% 0%, rgba(166,198,226,.20), transparent 60%)",
        }}
      />
      <div className="rounded-xl bg-body/80 p-3 text-heading-1 w-max relative mb-3 border border-box-border">
        <span className="text-[rgb(63,97,170)]">{icon}</span>
      </div>
      <h3 className="text-heading-1 font-semibold text-lg sm:text-xl">{title}</h3>
      <Paragraph className="mt-2">{description}</Paragraph>
      <motion.span
        aria-hidden
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "42%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="block mt-4 h-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(21,45,94,.95), rgba(166,198,226,.95))",
        }}
      />
    </motion.div>
  );
}
