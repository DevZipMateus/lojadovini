import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Sobre',
    href: '#sobre'
  }, {
    name: 'Produtos',
    href: '#produtos'
  }, {
    name: 'Depoimentos',
    href: '#depoimentos'
  }, {
    name: 'Contato',
    href: '#contato'
  }];
  return <header className={cn("fixed w-full z-50 transition-all duration-300", scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6")}>
      <nav className="container-section">
        <div className="flex items-center justify-between">
          <a href="#home" className="relative z-10">
            
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                {item.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out", isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
          <div className="py-4 px-4 space-y-4">
            {navigation.map(item => <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-900 hover:text-gray-600 transition-colors">
                {item.name}
              </a>)}
          </div>
        </div>
      </nav>
    </header>;
};
export default Header;