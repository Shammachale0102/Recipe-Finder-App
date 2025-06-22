// src/components/RecipeList.jsx
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        No recipes found. Try searching something else!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;



