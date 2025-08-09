import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { navItems } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="relative bg-box-bg border-t border-box-border pt-20 pb-10 rounded-t-3xl mt-20">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10 text-heading-2">
        {/* Logo + Nombre */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-8 h-8" alt="vexIA Logo" />
            <span className="text-xl font-bold text-heading-1">vexIA</span>
          </div>
          <p className="text-sm text-heading-3 text-center md:text-left max-w-xs">
            Automatiza, optimiza y crece. Llevamos tu negocio al siguiente nivel con IA.
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-heading-1">Navegación</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-heading-1 transition">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto / acción */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-heading-1">¿Tienes dudas?</h4>
          <p className="text-sm text-heading-3 max-w-xs text-center md:text-left">
            Escríbenos para una demo o asesoría gratuita. Estamos listos para ayudarte.
          </p>
          <a href="#contact"
             className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-[rgb(var(--ink-inverse))] transition text-sm font-medium">
            Contáctanos
          </a>
        </div>
      </Container>

      <Container className="pt-10 mt-10 border-t border-box-border text-center text-xs text-heading-3">
        © {new Date().getFullYear()} vexIA. Todos los derechos reservados.
      </Container>
    </footer>
  );
};
