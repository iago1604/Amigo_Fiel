import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import PetDetails from './pages/PetDetails';
import Donate from './pages/Donate';
import { PETS_DATA } from './data';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <ScrollToTop />
        <Navbar favoriteCount={favorites.length} />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  featuredPets={PETS_DATA.slice(0, 3)} 
                  favorites={favorites} 
                  toggleFavorite={toggleFavorite} 
                />
              } 
            />
            <Route 
              path="/adote" 
              element={
                <Catalog 
                  pets={PETS_DATA} 
                  favorites={favorites} 
                  toggleFavorite={toggleFavorite} 
                />
              } 
            />
            <Route 
              path="/pet/:id" 
              element={
                <PetDetails 
                  pets={PETS_DATA} 
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              } 
            />
            <Route path="/ajudar" element={<Donate />} />
            <Route path="/como-funciona" element={<div className="p-20 text-center text-2xl font-bold">Página em Construção</div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
