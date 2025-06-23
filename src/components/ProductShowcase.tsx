
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ProductDetailsDialog from "./ProductDetailsDialog";
import { useState } from "react";

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
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
        {products.map((product) => (
          <AnimatedSection
            key={product.name}
            animation="fade-in"
            className="h-full"
          >
            <Card className="overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div 
                  className="aspect-square relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(product.name)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 xl:p-6">
                  <h3 className="text-xl xl:text-2xl font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-600 xl:text-lg mb-4">{product.description}</p>
                  <a
                    href={createWhatsAppLink(product.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary hover:underline text-sm xl:text-base font-medium"
                  >
                    Solicitar informações
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      <ProductDetailsDialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
        productType={selectedProduct || ""}
      />
      <div className="mt-12 xl:mt-16 text-center">
        <a
          href="https://www.instagram.com/lojado.vini/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 xl:px-8 xl:py-4 xl:text-lg rounded-lg hover:opacity-90 transition-opacity"
        >
          <Instagram className="w-5 h-5 xl:w-6 xl:h-6" />
          Siga-nos no Instagram
        </a>
      </div>
    </>
  );
};

export default ProductShowcase;
