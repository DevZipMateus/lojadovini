
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos Produtos</h2>
          <p className="text-center text-gray-600 mb-12">
            Trabalhamos com todos os produtos Apple disponíveis, com garantia e suporte humanizado.
          </p>
          <div className="text-center py-8">
            <p>Produtos Apple em Destaque:</p>
            <ul className="flex flex-wrap justify-center gap-8 mt-6">
              <li className="font-medium">iPhones</li>
              <li className="font-medium">iPads</li>
              <li className="font-medium">MacBooks</li>
              <li className="font-medium">Acessórios</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-2">+300 clientes satisfeitos</h3>
              <p className="text-gray-600">Compromisso com excelência e qualidade</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Envios para todo o Brasil</h3>
              <p className="text-gray-600">Logística segura e eficiente</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Garantia Apple e suporte humanizado</h3>
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
