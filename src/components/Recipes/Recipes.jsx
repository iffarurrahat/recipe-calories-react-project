import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import CookingItems from "./CookingItems";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [addNewRecipe, setAddNewRecipe] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const res = await fetch("recipes.json");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    loadRecipes();
  }, []);

  const handleRecipes = (recipe) => {
    const newRecipe = [...addNewRecipe, recipe];
    setAddNewRecipe(newRecipe);
  };

  return (
    <div className="mt-12 md:mt-24">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-medium">
          Our Recipes
        </h1>
        <p className="lg:w-2/3 mx-auto mt-3 md:mt-6">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe_id}
                recipe={recipe}
                handleRecipes={handleRecipes}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 h-fit border rounded-xl">
          <CookingItems addNewRecipe={addNewRecipe} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
