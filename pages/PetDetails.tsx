import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Share2, ArrowLeft, Heart, Check, AlertCircle } from 'lucide-react';
import { Pet } from '../types';

interface PetDetailsProps {
  pets: Pet[];
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

const PetDetails: React.FC<PetDetailsProps> = ({ pets, toggleFavorite, favorites }) => {
  const { id } = useParams<{ id: string }>();
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-800">Pet não encontrado</h2>
            <Link to="/adote" className="mt-4 text-brand-green hover:underline">Voltar para a lista</Link>
        </div>
    );
  }

  const isFavorite = favorites.includes(pet.id);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Back Button sticky */}
      <div className="bg-white/80 backdrop-blur-md sticky top-20 z-40 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
             <Link to="/adote" className="inline-flex items-center text-slate-600 hover:text-brand-green font-medium">
                <ArrowLeft size={20} className="mr-2" />
                Voltar para adoção
             </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Images */}
            <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square bg-slate-100">
                    <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-cover" />
                    
                    <button 
                        onClick={() => toggleFavorite(pet.id)}
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-white transition-all group"
                    >
                        <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400 group-hover:text-red-400'}`} />
                    </button>
                </div>
                
                {/* Thumbnails (Mockup) */}
                <div className="grid grid-cols-4 gap-4">
                     {[1, 2, 3, 4].map((i) => (
                         <div key={i} className={`rounded-xl overflow-hidden aspect-square cursor-pointer ${i === 1 ? 'ring-2 ring-brand-green ring-offset-2' : 'opacity-70 hover:opacity-100'}`}>
                            <img src={pet.imageUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                         </div>
                     ))}
                </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col">
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-brand-blue text-blue-800 px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                            {pet.species}
                        </span>
                        {pet.isUrgent && (
                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold tracking-wide flex items-center gap-1">
                                <AlertCircle size={14} /> Urgente
                            </span>
                        )}
                    </div>
                    <h1 className="text-5xl font-display font-bold text-slate-900 mb-2">{pet.name}</h1>
                    <div className="flex items-center text-slate-500 font-medium">
                        <MapPin size={18} className="mr-1 text-brand-green" />
                        {pet.location}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Gênero</p>
                        <p className="text-lg font-bold text-slate-800">{pet.gender}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Idade</p>
                        <p className="text-lg font-bold text-slate-800">{pet.age === 0 ? '< 1 ano' : `${pet.age} anos`}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Porte</p>
                        <p className="text-lg font-bold text-slate-800">{pet.size}</p>
                    </div>
                </div>

                <div className="prose prose-slate mb-8">
                    <h3 className="font-display font-bold text-2xl text-slate-800 mb-3">Minha História</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {pet.story}
                    </p>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        {pet.description}
                    </p>
                </div>

                <div className="mb-10">
                    <h3 className="font-display font-bold text-xl text-slate-800 mb-4">Saúde e Comportamento</h3>
                    <div className="flex flex-wrap gap-3">
                        {pet.attributes.map((attr, idx) => (
                            <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium border border-green-100">
                                <Check size={16} className="text-green-500" /> {attr}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-brand-green hover:bg-brand-greenDark text-white text-lg font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                        Quero Adotar o {pet.name}
                    </button>
                    <button className="sm:flex-none px-6 py-4 border-2 border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        <Share2 size={20} /> Compartilhar
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
