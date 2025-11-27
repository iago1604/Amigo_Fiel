import React, { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';
import { Pet, Species, Gender, Size, AgeGroup, FilterState } from '../types';
import PetCard from '../components/PetCard';

interface CatalogProps {
  pets: Pet[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({ pets, favorites, toggleFavorite }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    species: 'All',
    gender: 'All',
    size: 'All',
    ageGroup: 'All',
    location: ''
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredPets = useMemo(() => {
    return pets.filter(pet => {
      if (filters.species !== 'All' && pet.species !== filters.species) return false;
      if (filters.gender !== 'All' && pet.gender !== filters.gender) return false;
      if (filters.size !== 'All' && pet.size !== filters.size) return false;
      if (filters.ageGroup !== 'All' && pet.ageGroup !== filters.ageGroup) return false;
      if (filters.location && !pet.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      return true;
    });
  }, [pets, filters]);

  const clearFilters = () => {
    setFilters({
      species: 'All',
      gender: 'All',
      size: 'All',
      ageGroup: 'All',
      location: ''
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Encontre seu Novo Amigo</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Use os filtros abaixo para encontrar o companheiro perfeito que se adapta ao seu estilo de vida e ao seu coração.
          </p>
        </div>

        {/* Search & Filters Toggle Mobile */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="relative w-full md:w-96">
                <input 
                    type="text"
                    placeholder="Buscar por cidade ou estado..."
                    className="w-full pl-4 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                />
            </div>
            <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 w-full md:w-auto justify-center"
            >
                <Filter size={20} />
                Filtros
                {(filters.species !== 'All' || filters.gender !== 'All' || filters.size !== 'All' || filters.ageGroup !== 'All') && (
                    <span className="bg-brand-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">!</span>
                )}
            </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8 animate-in slide-in-from-top-4 fade-in duration-300">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-slate-800">Filtrar Por:</h3>
                    <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-600 font-medium">Limpar Filtros</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Espécie</label>
                        <select 
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-brand-green focus:border-brand-green outline-none"
                            value={filters.species}
                            onChange={(e) => handleFilterChange('species', e.target.value)}
                        >
                            <option value="All">Todas</option>
                            {Object.values(Species).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Gênero</label>
                        <select 
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-brand-green focus:border-brand-green outline-none"
                            value={filters.gender}
                            onChange={(e) => handleFilterChange('gender', e.target.value)}
                        >
                            <option value="All">Todos</option>
                            {Object.values(Gender).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Idade</label>
                        <select 
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-brand-green focus:border-brand-green outline-none"
                            value={filters.ageGroup}
                            onChange={(e) => handleFilterChange('ageGroup', e.target.value)}
                        >
                            <option value="All">Todas</option>
                            {Object.values(AgeGroup).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">Porte</label>
                        <select 
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-brand-green focus:border-brand-green outline-none"
                            value={filters.size}
                            onChange={(e) => handleFilterChange('size', e.target.value)}
                        >
                            <option value="All">Todos</option>
                            {Object.values(Size).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        )}

        {/* Results Grid */}
        {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPets.map(pet => (
                <PetCard 
                    key={pet.id} 
                    pet={pet} 
                    isFavorite={favorites.includes(pet.id)}
                    onToggleFavorite={toggleFavorite}
                />
            ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
                    <X className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Nenhum amigo encontrado</h3>
                <p className="text-slate-500 mt-2">Tente ajustar seus filtros para ver mais resultados.</p>
                <button onClick={clearFilters} className="mt-6 text-brand-greenDark font-bold hover:underline">
                    Ver todos os animais
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
