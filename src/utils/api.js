import axios from "axios";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export const searchRecipes = async (ingredients) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/findByIngredients`,
    {
      params: {
        ingredients,
        number: 10,
        apiKey: API_KEY,
      },
    }
  );
  return response.data;
};

export const getRecipeDetails = async (id) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information`,
    {
      params: {
        apiKey: API_KEY,
      },
    }
  );
  return response.data;
};
