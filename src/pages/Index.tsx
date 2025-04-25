
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProductShowcase from "@/components/ProductShowcase";

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <section id="produtos" className="py-16 bg-gradient-to-b from-secondary to-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Nossos Produtos</h2>
          <p className="text-center text-gray-300 mb-12">
            Trabalhamos com produtos Apple originais, com garantia fornecida diretamente pela Apple.
          </p>
          <ProductShowcase />
        </div>
      </section>
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-2">+2000</h3>
              <p className="text-gray-600">Clientes satisfeitos desde 2020</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Produtos Originais</h3>
              <p className="text-gray-600">Acessórios Originais Apple</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Suporte Humanizado</h3>
              <p className="text-gray-600">Atendimento personalizado</p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Index;
