
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 xl:py-24 bg-gradient-to-b from-secondary/30 to-primary/20">
      <div className="container mx-auto px-4 xl:px-8 2xl:px-16 max-w-7xl">
        <AnimatedSection>
          <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-6 xl:mb-8 text-secondary">Entre em Contato</h2>
          <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl xl:max-w-4xl mx-auto mb-12 xl:mb-16 text-center">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200/20 rounded-xl p-6 sm:p-8 xl:p-12 border-secondary/20">
              <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-6 xl:mb-8 text-primary">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 xl:h-6 xl:w-6 text-primary" />
                  </div>
                  <div className="ml-3 xl:ml-4">
                    <h4 className="text-base xl:text-lg font-medium">Telefone</h4>
                    <p className="text-sm xl:text-base text-gray-600">(31) 99324-3003</p>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 xl:h-6 xl:w-6 text-primary" />
                  </div>
                  <div className="ml-3 xl:ml-4">
                    <h4 className="text-base xl:text-lg font-medium">E-mail</h4>
                    <p className="text-sm xl:text-base text-gray-600 break-words">lojado.vini.ltda@gmail.com</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 xl:h-6 xl:w-6 text-primary" />
                  </div>
                  <div className="ml-3 xl:ml-4">
                    <h4 className="text-base xl:text-lg font-medium">Endereço</h4>
                    <p className="text-sm xl:text-base text-gray-600">Rua Dener Cunha Peixoto, 11</p>
                    <p className="text-sm xl:text-base text-gray-600">Buritis - Belo Horizonte</p>
                    <p className="text-sm xl:text-base text-gray-600">CEP: 30575-817</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 xl:mt-8 p-4 xl:p-6 bg-secondary/20 rounded-lg">
                <h4 className="text-lg xl:text-xl font-medium mb-2">Horário de Atendimento</h4>
                <p className="text-gray-600 text-sm xl:text-base">Segunda a Sexta: 10h às 19h</p>
                <p className="text-gray-600 text-sm xl:text-base">Sábados: 10h às 15h</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
