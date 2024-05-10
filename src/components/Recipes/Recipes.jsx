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
              <RecipeCard key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 h-fit border rounded-xl">
          {/* Want to cook:: part */}
          <div>
            <h2 className="text-2xl font-medium text-center">
              Want to cook: 01
            </h2>
            <p className="h-[1px] w-4/5 bg-[#28282826] mx-auto mt-4 mb-6"></p>
            <div className=" font-medium text-[#878787] text-xs lg:text-base">
              <div className="flex pl-6 lg:pl-10 gap-5 mb-4">
                <p>Name</p>
                <p className="ml-8 sm:ml-40 lg:ml-24">Time</p>
                <p className="ml-2 sm:ml-7 lg:ml-5">Calories</p>
              </div>
              <div className="flex gap-2 lg:gap-5 p-3 bg-[#28282808] text-[#282828B3] mb-8">
                <p>1</p>
                <p className="w-24 sm:w-48 lg:w-52">Chicken Caesar Salad</p>
                <p>20 minutes</p>
                <p>400 calories</p>
                <button className="bg-green-400 p-1 lg:p-2 rounded-2xl">
                  Preparing
                </button>
              </div>
            </div>
          </div>
          {/* Currently cooking: part */}
          <div>
            <h2 className="text-2xl font-medium text-center">
              Currently cooking: 02
            </h2>
            <p className="h-[1px] w-4/5 bg-[#28282826] mx-auto mt-4 mb-6"></p>
            <div className=" font-medium text-[#878787] text-xs lg:text-base">
              <div className="flex pl-6 lg:pl-10 gap-5 mb-4">
                <p>Name</p>
                <p className="ml-16 sm:ml-44 lg:ml-40">Time</p>
                <p className="ml-8 sm:ml-7 lg:ml-10">Calories</p>
              </div>
              <div className="flex gap-4 lg:gap-5 p-3 bg-[#28282808] text-[#282828B3] mb-8">
                <p>1</p>
                <p className="w-24 sm:w-48 lg:w-52 ">Spaghetti Bolognese</p>
                <p>30 minutes</p>
                <p>600 calories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
