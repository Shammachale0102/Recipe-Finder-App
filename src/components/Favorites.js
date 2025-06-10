import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
