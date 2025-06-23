
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProductShowcase from "@/components/ProductShowcase";

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <section id="produtos" className="py-16 xl:py-24 bg-gradient-to-b from-secondary to-primary/20">
        <div className="container mx-auto px-4 xl:px-8 2xl:px-16 max-w-7xl">
          <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-6 xl:mb-8 text-white">Nossos Produtos</h2>
          <p className="text-center text-gray-300 xl:text-xl 2xl:text-2xl mb-12 xl:mb-16 max-w-4xl mx-auto">
            Trabalhamos com produtos Apple originais, com garantia fornecida diretamente pela Apple.
          </p>
          <ProductShowcase />
        </div>
      </section>
      <section id="destaques" className="py-16 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-8 2xl:px-16 max-w-7xl">
          <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-10 xl:mb-16">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
            <div className="bg-white p-6 xl:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-primary mb-2">+2000</h3>
              <p className="text-gray-600 xl:text-lg">Clientes satisfeitos desde 2020</p>
            </div>
            <div className="bg-white p-6 xl:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-primary mb-2">Atendemos Belo Horizonte e região</h3>
              <p className="text-gray-600 xl:text-lg">Entrega rápida e segura em toda a região</p>
            </div>
            <div className="bg-white p-6 xl:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-primary mb-2">Suporte Humanizado</h3>
              <p className="text-gray-600 xl:text-lg">Atendimento personalizado</p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Index;
