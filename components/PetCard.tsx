import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(pet.id);
            }}
            className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors group/heart"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400 group-hover/heart:text-red-400'
              }`}
            />
          </button>
        </div>
        
        {pet.isUrgent && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Urgente
          </div>
        )}
        {pet.isNew && !pet.isUrgent && (
          <div className="absolute top-3 left-3 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Novo
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-display font-bold text-xl text-slate-800">{pet.name}</h3>
            <p className="text-sm text-slate-500 font-medium">{pet.breed}</p>
          </div>
          <div className="flex flex-col items-end">
             <span className="text-xs font-bold bg-brand-blue text-blue-700 px-2 py-1 rounded-md">
                {pet.gender === 'Macho' ? '♂' : '♀'} {pet.ageGroup}
             </span>
          </div>
        </div>

        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          {pet.location}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
            {pet.attributes.slice(0, 2).map((attr, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    {attr}
                </span>
            ))}
        </div>

        <Link
          to={`/pet/${pet.id}`}
          className="block w-full text-center py-3 rounded-xl border-2 border-brand-green text-brand-greenDark font-bold hover:bg-brand-green hover:text-white transition-colors"
        >
          Ver Perfil
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
