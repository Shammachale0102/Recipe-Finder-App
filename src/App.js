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
        <header className="bg-green-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center shadow">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">
            🍳 Recipe Finder
          </h1>
          <nav className="space-x-4 text-lg">
            <Link
              to="/"
              className="hover:underline hover:text-yellow-200 transition"
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className="hover:underline hover:text-yellow-200 transition"
            >
              Favorites
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto p-4 min-h-[calc(100vh-80px)] bg-gray-50">
          <Routes>
            <Route
              path="/"
              element={
                <div className="space-y-6">
                  <SearchBar onSearch={handleSearch} />
                  <RecipeList recipes={recipes} />
                </div>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-green-600 text-white text-center p-2 mt-4">
          © 2025 Recipe Finder. Enjoy Cooking!
        </footer>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
