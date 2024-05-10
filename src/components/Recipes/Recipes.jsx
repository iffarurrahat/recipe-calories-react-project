import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="mt-12 md:mt-24">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-medium">
          Our Recipes
        </h1>
        <p className="md:w-2/3 mx-auto mt-3 md:mt-6">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="md:flex gap-6">
        <div className="md:w-3/5 h-[700px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
        <div className="md:w-2/5 h-[700px] bg-green-500"></div>
      </div>
    </div>
  );
};

export default Recipes;
