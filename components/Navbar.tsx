import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, PawPrint } from 'lucide-react';

interface NavbarProps {
  favoriteCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ favoriteCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Adote um Amigo', path: '/adote' },
    { name: 'Como Ajudar', path: '/ajudar' },
    { name: 'Como Funciona', path: '/como-funciona' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-brand-green p-2 rounded-full text-white transform group-hover:rotate-12 transition-transform">
                <PawPrint size={24} />
              </div>
              <span className="font-display font-bold text-2xl text-slate-800">
                Amigo<span className="text-brand-greenDark">Fiel</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-greenDark font-bold'
                    : 'text-slate-600 hover:text-brand-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l pl-6 border-slate-200">
               <div className="relative group cursor-pointer">
                <Heart className={`text-slate-400 group-hover:text-red-500 transition-colors ${favoriteCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                {favoriteCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {favoriteCount}
                  </span>
                )}
              </div>
              <Link
                to="/ajudar"
                className="bg-brand-green hover:bg-brand-greenDark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Doe Agora
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-brand-blue text-brand-greenDark'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between px-3">
              <span className="text-slate-600 font-medium flex items-center gap-2">
                <Heart className={`w-5 h-5 ${favoriteCount > 0 ? 'fill-red-500 text-red-500' : ''}`} /> 
                Favoritos ({favoriteCount})
              </span>
            </div>
            <Link
              to="/ajudar"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center bg-brand-green text-white px-4 py-3 rounded-xl font-bold"
            >
              Doe Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
