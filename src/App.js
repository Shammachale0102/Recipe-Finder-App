import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import { searchRecipes } from "./utils/api";
import './index.css';


const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients) => {
    const data = await searchRecipes(ingredients);
    setRecipes(data);
  };

  return (
    <FavoritesProvider>
      <Router>
        {/* Header */}
        <header className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold tracking-wide mb-2 sm:mb-0">🍳 Recipe Finder</h1>
            <nav className="space-x-6 text-lg font-medium">
              <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
              <Link to="/favorites" className="hover:text-yellow-200 transition">Favorites</Link>
            </nav>
          </div>
          
        </header>

        {/* Main */}
        <main className="bg-gray-100 min-h-screen py-10">
          <div className="max-w-6xl mx-auto px-4">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="space-y-8">
                    <SearchBar onSearch={handleSearch} />
                    <RecipeList recipes={recipes} />
                  </div>
                }
              />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-green-600 text-white text-center py-4 text-sm mt-10">
          © 2025 Recipe Finder. Enjoy Cooking!
        </footer>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
