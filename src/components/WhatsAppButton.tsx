
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '5531993243003';
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Loja do Vini.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/f0023de6-6372-4dd9-b0d9-d791c4a694ae.png" 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
    </a>
  );
};

export default WhatsAppButton;
