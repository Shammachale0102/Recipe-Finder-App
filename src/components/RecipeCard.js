import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleFavorite = () => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition p-4 flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
      <div className="flex justify-between items-center mt-auto">
        <Link
          to={`/recipe/${recipe.id}`}
          className="text-blue-600 hover:underline font-medium"
        >
          View Details
        </Link>
        <button
          onClick={handleFavorite}
          className={`flex items-center gap-1 text-sm px-2 py-1 rounded transition ${
            isFavorite(recipe.id)
              ? "bg-red-100 text-red-500 hover:bg-red-200"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {isFavorite(recipe.id) ? "💔 Remove" : "❤️ Favorite"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

