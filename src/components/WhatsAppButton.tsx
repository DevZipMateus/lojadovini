
import { Whatsapp } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5531993243003';
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Loja do Vini.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp"
      aria-label="Contato via WhatsApp"
    >
      <Whatsapp className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
