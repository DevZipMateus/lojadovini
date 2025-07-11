
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Suporte humanizado',
    'Mais de 2000 clientes satisfeitos',
    'Garantia',
    'Atendimento personalizado',
    'Facilidade na compra'
  ];

  return (
    <section id="sobre-nós" className="py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 xl:px-8 2xl:px-16 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-6 xl:mb-8 text-secondary">Sobre a Loja do Vini</h2>
          <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl xl:max-w-4xl mx-auto mb-12 xl:mb-16 text-center">
            Experiência de compra de qualidade, com transparência e atenção
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 xl:w-80 xl:h-80 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 xl:w-64 xl:h-64 bg-primary-light/20 rounded-full filter blur-xl"></div>
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
          
          <AnimatedSection animation="fade-in-up" className="space-y-6 xl:space-y-8">
            <span className="inline-block text-sm xl:text-base font-semibold py-1 px-3 bg-black/10 text-black rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold">Excelência em Produtos Apple</h3>
            <p className="text-gray-600 xl:text-lg 2xl:text-xl">
              Inaugurada em 2020, a Loja do Vini é especializada em produtos Apple originais,
              com mais de 2000 clientes satisfeitos. Nosso compromisso é oferecer uma experiência 
              de compra única com transparência e suporte humanizado.
            </p>
            <p className="text-gray-600 xl:text-lg 2xl:text-xl">
              Trabalhamos com produtos Apple originais e acessórios, sempre priorizando 
              a qualidade e a satisfação dos nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 xl:gap-3">
                  <CheckCircle className="h-5 w-5 xl:h-6 xl:w-6 text-black flex-shrink-0" />
                  <span className="text-gray-700 xl:text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://wa.me/5531993243003" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-block mt-4 xl:px-8 xl:py-4 xl:text-lg"
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
