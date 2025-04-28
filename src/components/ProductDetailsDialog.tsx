
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white/95 backdrop-blur-sm">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-primary">{details.name}</DialogTitle>
          <p className="text-gray-600 mt-2">{details.description}</p>
        </DialogHeader>
        
        <div className="p-6 pt-2 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.media.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md bg-gray-50 border border-gray-100 transition-all hover:shadow-xl">
                <div className="relative">
                  {item.type === "video" ? (
                    <AspectRatio ratio={16/9} className="bg-black">
                      <video 
                        src={item.src} 
                        controls 
                        className="w-full h-full object-contain"
                        preload="metadata"
                      />
                      <Video className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-1 z-10" size={24} />
                    </AspectRatio>
                  ) : (
                    <AspectRatio ratio={16/9} className="bg-black">
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-full object-contain" 
                      />
                      <Image className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-1 z-10" size={24} />
                    </AspectRatio>
                  )}
                  <div className="p-3 text-center font-medium text-gray-800">
                    {item.title}
                  </div>
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
