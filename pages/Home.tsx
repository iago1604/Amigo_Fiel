import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { Pet } from '../types';
import PetCard from '../components/PetCard';

interface HomeProps {
  featuredPets: Pet[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ featuredPets, favorites, toggleFavorite }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-6 tracking-wide uppercase">
              Amor Incondicional
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              Encontre seu <br/>
              <span className="text-brand-greenDark relative">
                Melhor Amigo
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-green opacity-30" viewBox="0 0 200 9" fill="currentColor" preserveAspectRatio="none">
                   <path d="M2.00025 6.99997C25.7534 5.92348 76.5333 1.13781 198.001 2.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Milhares de animais estão esperando por um lar cheio de amor. 
              Transforme uma vida e ganhe um companheiro para sempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/adote"
                className="bg-brand-green hover:bg-brand-greenDark text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Adote um Amigo
              </Link>
              <Link
                to="/como-funciona"
                className="bg-white hover:bg-slate-50 text-slate-700 text-lg font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all border border-slate-200"
              >
                Como Funciona
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative z-10">
               {/* Using a placeholder since user constraints require picsum, but conceptually this is a hero image */}
               <img 
                 src="https://picsum.photos/seed/hero-dog/800/800" 
                 alt="Happy Dog" 
                 className="rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square border-8 border-white"
               />
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                 <div className="bg-red-100 p-3 rounded-full text-red-500">
                    <Heart fill="currentColor" size={24} />
                 </div>
                 <div>
                    <p className="text-slate-900 font-bold text-lg">1.2k+</p>
                    <p className="text-slate-500 text-sm">Adoções este ano</p>
                 </div>
               </div>
            </div>
            
            {/* Abstract Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-16">
            Adoção Simples e Transparente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0 border-t-2 border-dashed border-slate-300"></div>

            {[
              { icon: Search, title: 'Encontre seu Pet', desc: 'Navegue pelos perfis e use filtros para achar seu par ideal.' },
              { icon: HomeIcon, title: 'Conheça', desc: 'Agende uma visita ou videochamada para conhecer o animal.' },
              { icon: CheckCircle, title: 'Leve para Casa', desc: 'Complete o processo e comece uma nova vida juntos.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-white border-4 border-brand-green rounded-full flex items-center justify-center text-brand-greenDark mb-6 shadow-sm">
                  <step.icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-500 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-greenDark font-bold uppercase tracking-wider text-sm">Eles precisam de você</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">
                Novos na Área
              </h2>
            </div>
            <Link to="/adote" className="hidden sm:flex items-center gap-2 text-brand-greenDark font-bold hover:text-brand-green transition-colors">
              Ver todos os animais <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPets.map(pet => (
              <PetCard 
                key={pet.id} 
                pet={pet} 
                isFavorite={favorites.includes(pet.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/adote" className="btn-primary inline-flex items-center gap-2">
              Ver todos os animais <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-greenDark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
           <h2 className="text-3xl font-display font-bold mb-8">"Adotar o Paçoca foi a melhor decisão da minha vida. A casa ficou mais alegre e ganhei um amigo leal."</h2>
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-bold">Mariana Silva</p>
                <p className="text-white/70 text-sm">Adotou em 2023</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
