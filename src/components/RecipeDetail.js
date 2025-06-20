import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../utils/api";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    };
    fetchDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover mb-4 rounded" />
      <h3 className="text-lg font-bold mt-4">Ingredients:</h3>
      <ul className="list-disc ml-6">
        {recipe.extendedIngredients.map((item) => (
          <li key={item.id}>{item.original}</li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4">Instructions:</h3>
      <p>{recipe.instructions || "No instructions available."}</p>
    </div>
  );
};

export default RecipeDetail;


