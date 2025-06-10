import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import { searchRecipes } from "./utils/api";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients) => {
    const data = await searchRecipes(ingredients);
    setRecipes(data);
  };

  return (
    <FavoritesProvider>
      <Router>
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">🍳 Recipe Finder</h1>
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar onSearch={handleSearch} />
                  <RecipeList recipes={recipes} />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
