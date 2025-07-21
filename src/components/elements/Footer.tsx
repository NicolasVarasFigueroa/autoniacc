import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative bg-box-bg border-t border-box-border pt-20 pb-10 rounded-t-3xl mt-20">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10 text-heading-2">
        
        {/* Logo + Nombre */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-8 h-8" alt="Autoniac Logo" />
            <span className="text-xl font-bold text-heading-1">Autoniac</span>
          </div>
          <p className="text-sm text-heading-3 text-center md:text-left max-w-xs">
            Automatiza, optimiza y crece. Te ayudamos a llevar tu negocio al siguiente nivel con inteligencia automática.
          </p>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-heading-1">Navegación</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((item, key) => (
              <li key={key}>
                <NavItem href={item.href} text={item.text} />
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
          <a
            href="#contact"
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition text-sm font-medium"
          >
            Contáctanos
          </a>
        </div>
      </Container>

      {/* Línea inferior */}
      <Container className="pt-10 mt-10 border-t border-box-border text-center text-xs text-heading-3">
        © {new Date().getFullYear()} Autoniac. Todos los derechos reservados.
      </Container>
    </footer>
  );
};
