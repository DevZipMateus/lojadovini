
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 xl:px-8 2xl:px-16 py-16 xl:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-12">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-6">Loja do Vini</h3>
            <p className="text-gray-400 xl:text-lg mb-6 xl:mb-8">
              Produtos Apple originais com garantia e suporte humanizado em Belo Horizonte.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lojado.vini/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 xl:w-12 xl:h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5 xl:h-6 xl:w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-6">Endereço</h3>
            <ul className="space-y-2 xl:space-y-3 text-gray-400 xl:text-lg">
              <li>Rua Dener Cunha Peixoto, 11</li>
              <li>Buritis - Belo Horizonte</li>
              <li>CEP: 30575-817</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-2 xl:space-y-3 text-gray-400 xl:text-lg">
              <li>Segunda a Sexta: 10h às 19h</li>
              <li>Sábados: 10h às 15h</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-6">Contato</h3>
            <ul className="space-y-2 xl:space-y-4 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 xl:w-6 xl:h-6 mt-1 mr-3 xl:mr-4 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
                </div>
                <div>
                  <p className="xl:text-lg">(31) 99324-3003</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 xl:w-6 xl:h-6 mt-1 mr-3 xl:mr-4 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3 xl:h-4 xl:w-4" />
                </div>
                <div>
                  <p className="xl:text-lg break-words">lojado.vini.ltda@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 xl:mt-16 pt-8 xl:pt-12 text-gray-400 text-sm xl:text-base text-center">
          <p>&copy; {currentYear} Loja do Vini. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
