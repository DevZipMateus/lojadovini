
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Acessórios Originais Apple',
    'Suporte humanizado',
    'Mais de 2000 clientes satisfeitos',
    'Garantia fornecida pela Apple',
    'Atendimento personalizado',
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
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-light/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <video 
                  className="rounded-2xl w-full h-auto object-cover"
                  controls
                  playsInline
                >
                  <source src="/lovable-uploads/Snapsave.app_-yHiEnmlWFBYBjzTY.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-black/10 text-black rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">Excelência em Produtos Apple</h3>
            <p className="text-gray-600">
              Inaugurada em 2020, a Loja do Vini é especializada em produtos Apple originais,
              com mais de 2000 clientes satisfeitos. Nosso compromisso é oferecer uma experiência 
              de compra única com transparência e suporte humanizado.
            </p>
            <p className="text-gray-600">
              Trabalhamos com produtos Apple originais e acessórios, sempre priorizando 
              a qualidade e a satisfação dos nossos clientes.
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
