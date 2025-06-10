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
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="text-lg font-bold">{recipe.title}</h3>
      <div className="flex justify-between mt-2">
        <Link
          to={`/recipe/${recipe.id}`}
          className="text-blue-500 underline"
        >
          View Details
        </Link>
        <button onClick={handleFavorite}>
          {isFavorite(recipe.id) ? "💔 Remove" : "❤️ Favorite"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
