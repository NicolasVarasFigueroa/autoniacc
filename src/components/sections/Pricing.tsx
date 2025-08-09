import { pricingPlans } from "../../utils/pricing-plan";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>Planes de Automatización</Title>
        <Paragraph className="mt-4">
          Elige el plan que mejor se adapte a tu negocio. Todos incluyen acceso completo a la plataforma, soporte personalizado y actualizaciones continuas.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="group relative h-full">
              <div className="p-[1px] rounded-3xl brand-gradient h-full">
                <div className="bg-box-bg border border-[color:rgba(0,0,0,0.02)] rounded-3xl
                                shadow-lg shadow-[0_10px_30px_-12px_rgba(21,45,94,0.15)] p-8 flex flex-col h-full relative">
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full text-xs font-bold uppercase tracking-wider px-3 py-1 bg-primary text-[rgb(var(--ink-inverse))]">
                      Más Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">{plan.title}</h3>
                  <p className="mt-4 text-4xl font-bold text-heading-1">{plan.price}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-primary">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full">Elegir este plan</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
