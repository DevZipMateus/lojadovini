
import { ChevronRight, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return <section id="início" className="relative min-h-screen flex items-start pt-24 md:pt-16 md:items-center bg-gradient-to-br from-secondary to-primary overflow-hidden py-[26px]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white/20 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 xl:w-80 xl:h-80 rounded-full bg-white/20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 xl:w-56 xl:h-56 rounded-full bg-white/20"></div>
      </div>

      <div className="container mx-auto px-4 xl:px-8 2xl:px-16 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6 xl:space-y-8">
            <span className="inline-block text-sm xl:text-base font-semibold py-1 px-3 bg-white/10 text-white rounded-full">
              Produtos Apple Originais
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-white">
              Seu produto Apple <br />
              <span className="text-primary-light">está aqui</span>
            </h1>
            <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-100 max-w-xl xl:max-w-2xl">
              Produtos Apple originais com garantia e suporte humanizado. 
              iPhone, iPad, MacBook e acessórios em Belo Horizonte.
            </p>
            <div className="flex flex-wrap gap-4 xl:gap-6 pt-2">
              <a href="https://wa.me/5531993243003" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 xl:px-8 xl:py-4 xl:text-lg">
                Compre pelo WhatsApp
                <ChevronRight className="h-4 w-4 xl:h-5 xl:w-5" />
              </a>
              <a href="#produtos" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 xl:px-8 xl:py-4 xl:text-lg rounded-lg font-medium transition-all duration-300">
                Ver Produtos
              </a>
              <a href="https://www.instagram.com/lojado.vini/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 xl:px-8 xl:py-4 xl:text-lg rounded-lg hover:opacity-90 transition-opacity">
                <Instagram className="w-5 h-5 xl:w-6 xl:h-6" />
                Siga-nos no Instagram
              </a>
            </div>

            <div className="pt-5 flex items-center gap-4 xl:gap-8 my-0 py-[25px] flex-wrap xl:flex-nowrap">
              <div className="text-center flex items-center gap-4 xl:gap-6 flex-wrap xl:flex-nowrap">
                <div className="text-white font-medium xl:text-lg">Desde 2020</div>
                <div className="h-5 w-px bg-white/40"></div>
                <div className="text-white font-medium xl:text-lg">+ de 2000 clientes satisfeitos</div>
                <div className="h-5 w-px bg-white/40"></div>
                <div className="text-white font-medium xl:text-lg">Atendemos Belo Horizonte e região</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 xl:w-80 xl:h-80 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 xl:w-64 xl:h-64 bg-primary-light/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img alt="Loja do Vini - Produtos Apple" src="/lovable-uploads/c00b3f0c-32a4-4af8-8a86-c99b58ba14e4.png" className="rounded-2xl w-full h-auto object-contain p-8 xl:p-12" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};

export default HeroSection;
