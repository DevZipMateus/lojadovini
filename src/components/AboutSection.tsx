
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Atendimento personalizado',
    'Suporte humanizado',
    'Produtos originais',
    'Garantia Apple',
    'Envio para todo Brasil',
    'Facilidade na compra'
  ];

  return (
    <section id="sobre-nós" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre a Loja do Vini</h2>
          <p className="section-subtitle">
            Experiência de compra de qualidade, com transparência e atenção
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551651767-d5ffbdd04b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Produtos Apple" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-black/10 text-black rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">Excelência em Produtos Apple</h3>
            <p className="text-gray-600">
              Inaugurada em 2020, a Loja do Vini nasceu com o intuito de proporcionar uma experiência 
              de compra única aos amantes da Apple, com transparência, facilidade e muita atenção aos detalhes.
            </p>
            <p className="text-gray-600">
              Trabalhamos com todos os produtos Apple disponíveis e usamos a marca Apple como nossa 
              referência em qualidade e exclusividade.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://wa.me/5531993243003" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-block mt-4"
            >
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
