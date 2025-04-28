
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video, Image } from "lucide-react";

interface ProductMedia {
  type: "video" | "image";
  src: string;
  title: string;
}

interface ProductDetails {
  name: string;
  description: string;
  media: ProductMedia[];
}

const productDetails: Record<string, ProductDetails> = {
  iPhones: {
    name: "iPhones",
    description: "Descubra a mais recente linha de iPhones com tecnologia de ponta e recursos inovadores.",
    media: [
      { type: "image", src: "/lovable-uploads/iPhone 15.jpeg", title: "iPhone 15" },
      { type: "image", src: "/lovable-uploads/iPhone 16.jpeg", title: "iPhone 16" },
      { type: "video", src: "/lovable-uploads/iPhone 16 Pro Max.mp4", title: "iPhone 16 Pro Max" },
    ],
  },
  iPads: {
    name: "iPads",
    description: "Uma linha completa de iPads para atender todas as suas necessidades, desde o compacto Mini até o poderoso Pro.",
    media: [
      { type: "image", src: "/lovable-uploads/iPad 11.jpeg", title: "iPad 11" },
      { type: "video", src: "/lovable-uploads/iPad Air M2.mp4", title: "iPad Air M2" },
      { type: "video", src: "/lovable-uploads/iPad Mini.mp4", title: "iPad Mini" },
    ],
  },
  "Apple Watch": {
    name: "Apple Watch",
    description: "Descubra nossa coleção de Apple Watches, desde o acessível SE até o ultra-resistente Ultra 2.",
    media: [
      { type: "video", src: "/lovable-uploads/Apple Watch SE.mp4", title: "Apple Watch SE" },
      { type: "video", src: "/lovable-uploads/Apple Watch Series 10.mp4", title: "Apple Watch Series 10" },
      { type: "video", src: "/lovable-uploads/Apple Watch Ultra 2.mp4", title: "Apple Watch Ultra 2" },
    ],
  },
};

interface ProductDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productType: string;
}

const ProductDetailsDialog = ({ open, onOpenChange, productType }: ProductDetailsDialogProps) => {
  const details = productDetails[productType];
  
  if (!details) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">{details.name}</h2>
          <p className="text-gray-600">{details.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.media.map((item, index) => (
              <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                {item.type === "video" ? (
                  <>
                    <video 
                      src={item.src} 
                      controls 
                      className="w-full h-full object-cover"
                    />
                    <Video className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1" />
                  </>
                ) : (
                  <>
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover" 
                    />
                    <Image className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1" />
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
