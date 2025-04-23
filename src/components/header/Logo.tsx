
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/2e364987-b0ea-431c-8ea5-627208090506.png"
        alt="Loja do Vini" 
        className={cn(
          "h-12 w-auto transition-all duration-300",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
