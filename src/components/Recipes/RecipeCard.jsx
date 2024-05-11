import PropTypes from "prop-types";

const RecipeCard = ({ recipe, handleRecipes }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="border p-6 rounded-2xl">
      <img
        src={recipe_image}
        alt={recipe_name}
        className="rounded-2xl w-full mb-6"
      />
      <h4 className="text-xl font-medium">{recipe_name}</h4>
      <p className="text-[#878787] my-4">{short_description}</p>
      <p className="text-lg font-medium mb-2">Ingredients: 6</p>
      <ul className="text-[#878787]">
        {ingredients.map((item, idx) => (
          <li key={idx} className="list-disc ml-5 text-sm">
            {item}
          </li>
        ))}
      </ul>
      <hr className="my-3" />
      <div className="flex gap-10 text-[#878787]">
        <p>{preparing_time} minutes</p>
        <p>{calories} calories</p>
      </div>
      <button
        onClick={() => handleRecipes(recipe)}
        className="bg-green-400 mt-6 px-5 py-3 rounded-3xl"
      >
        Want to Cook
      </button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleRecipes: PropTypes.func.isRequired,
};
export default RecipeCard;
