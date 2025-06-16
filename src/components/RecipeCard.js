// src/components/RecipeCard.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleFavorite = () => {
    isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
      <div className="flex justify-between items-center mt-3">
        <Link
          to={`/recipe/${recipe.id}`}
          className="text-emerald-600 hover:underline font-medium"
        >
          View Details
        </Link>
        <button onClick={handleFavorite} className="text-xl">
          {isFavorite(recipe.id) ? "💔" : "❤️"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
