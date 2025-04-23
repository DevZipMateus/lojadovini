
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    name: "iPhones",
    image: "/lovable-uploads/iphone.png",
    description: "Os mais recentes iPhones com a melhor tecnologia"
  },
  {
    name: "iPads",
    image: "/lovable-uploads/iPads.jpeg",
    description: "iPads para todos os tipos de usuários"
  },
  {
    name: "MacBooks",
    image: "/lovable-uploads/MacBooks.jpeg",
    description: "MacBooks com poder e performance"
  },
  {
    name: "Acessórios",
    image: "/lovable-uploads/relogios.jpg",
    description: "Acessórios originais Apple"
  }
];

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <AnimatedSection
          key={product.name}
          animation="fade-in"
          className="h-full"
        >
          <Card className="overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300">{product.description}</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ProductShowcase;
