
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5531993243003';
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Loja do Vini.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
