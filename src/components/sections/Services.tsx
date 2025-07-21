import { useState } from "react";
import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
  const [verTodo, setVerTodo] = useState(false);

  const serviciosDestacados = services.slice(0, 3);
  const serviciosRestantes = services.slice(3);

  const handleToggle = () => setVerTodo(!verTodo);

  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Lo que automatizamos por ti</Title>
          <Paragraph>
            Automatizamos procesos clave de tu negocio para ahorrar tiempo,
            reducir errores y aumentar la eficiencia. Estas son algunas de las
            tareas que puedes delegar a Autoniac:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {(verTodo ? services : serviciosDestacados).map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center pt-6">
          <button
            onClick={handleToggle}
            className="px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            {verTodo ? "Ver menos" : "Ver más automatizaciones"}
          </button>
        </div>
      </Container>
    </section>
  );
};
