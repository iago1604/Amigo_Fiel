import React from 'react';
import { PawPrint, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <PawPrint className="text-brand-green" size={32} />
              <span className="font-display font-bold text-2xl">
                Amigo<span className="text-brand-green">Fiel</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Conectando corações e patas. Nossa missão é encontrar um lar amoroso para cada animal que precisa de ajuda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-green hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/adote" className="hover:text-brand-green transition-colors">Adotar um Amigo</Link></li>
              <li><Link to="/como-funciona" className="hover:text-brand-green transition-colors">Como Funciona</Link></li>
              <li><Link to="/ajudar" className="hover:text-brand-green transition-colors">Quero Ajudar</Link></li>
              <li><Link to="/historias" className="hover:text-brand-green transition-colors">Histórias de Sucesso</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-green shrink-0 mt-0.5" />
                <span>Rua dos Amigos, 123<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-green shrink-0" />
                <span>(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-green shrink-0" />
                <span>contato@amigofiel.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Novidades</h4>
            <p className="text-sm text-slate-400 mb-4">Receba notícias sobre novos animais e eventos de adoção.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-slate-800 border-none rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-green focus:outline-none"
              />
              <button className="bg-brand-green text-white font-bold py-2 rounded-lg hover:bg-brand-greenDark transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AmigoFiel. Todos os direitos reservados. Feito com amor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
