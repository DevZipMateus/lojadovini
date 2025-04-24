
import { ChevronRight, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return <section id="início" className="relative min-h-screen flex items-start pt-24 md:pt-16 md:items-center bg-gradient-to-br from-secondary to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white/20 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-white/20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-white/10 text-white rounded-full">
              Produtos Apple Originais
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Seu produto Apple <br />
              <span className="text-primary-light">está aqui</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-xl">
              Produtos Apple originais com garantia e suporte humanizado. 
              iPhone, iPad, MacBook e acessórios em Belo Horizonte.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/5531993243003" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                Compre pelo WhatsApp
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#produtos" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Ver Produtos
              </a>
              <a
                href="https://www.instagram.com/lojado.vini/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Siga-nos no Instagram
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">+300</div>
                <div className="text-sm text-gray-200">Clientes Satisfeitos</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-200">Originais</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">BR</div>
                <div className="text-sm text-gray-200">Envio Nacional</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-light/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img alt="Loja do Vini - Produtos Apple" src="/lovable-uploads/c00b3f0c-32a4-4af8-8a86-c99b58ba14e4.png" className="rounded-2xl w-full h-auto object-contain p-8" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default HeroSection;
