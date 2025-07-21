import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Da el siguiente paso con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Autoniac
              </span>{" "}
            </h1>
            <Paragraph className="pt-10">
            Automatiza tus procesos, acelera tu crecimiento y toma decisiones inteligentes con ayuda de nuestras herramientas IA. 
            Es momento de transformar tu negocio.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button>Contáctanos</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
