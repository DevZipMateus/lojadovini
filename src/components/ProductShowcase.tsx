
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Product {
  name: string;
  image: string;
  description: string;
  message: string;
}

const products: Product[] = [
  {
    name: "iPhones",
    image: "/lovable-uploads/iphone.png",
    description: "Os mais recentes iPhones com a melhor tecnologia",
    message: "Olá! Venho do site e tenho interesse em comprar iPhone"
  },
  {
    name: "iPads",
    image: "/lovable-uploads/iPads.jpeg",
    description: "iPads para todos os tipos de usuários",
    message: "Olá! Venho do site e tenho interesse em comprar iPad"
  },
  {
    name: "MacBooks",
    image: "/lovable-uploads/MacBooks.jpeg",
    description: "MacBooks com poder e performance",
    message: "Olá! Venho do site e tenho interesse em comprar MacBook"
  },
  {
    name: "Apple Watch",
    image: "/lovable-uploads/relogios.jpg",
    description: "Diveros Acessórios e modelos",
    message: "Olá! Venho do site e tenho interesse em comprar acessórios Apple"
  }
];

const ProductShowcase = () => {
  const phoneNumber = "5531993243003";

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <AnimatedSection
            key={product.name}
            animation="fade-in"
            className="h-full"
          >
            <Card className="overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <a
                  href={createWhatsAppLink(product.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-square relative overflow-hidden cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </a>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      <div className="mt-12 text-center">
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
    </>
  );
};

export default ProductShowcase;
