import PropTypes from "prop-types";
const CookingItems = ({
  addNewRecipe,
  handleCurrentlyCook,
  currentRecipes,
  sumOfPreparingTime,
  sumOfCalories,
}) => {
  return (
    <>
      {/* Want to cook: part */}
      <div>
        <h2 className="text-2xl font-medium text-center mt-6">
          Want to cook: {addNewRecipe.length}
        </h2>
        <p className="h-[1px] w-4/5 bg-[#28282826] mx-auto mt-4 mb-6"></p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            {/* row 1 */}
            {addNewRecipe.length ? (
              addNewRecipe.map((item, idx) => (
                <tbody key={idx}>
                  <tr className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{item?.recipe_name}</td>
                    <td>{item?.preparing_time} minutes</td>
                    <td>{item?.calories} calories</td>
                    <td>
                      <button
                        onClick={() =>
                          handleCurrentlyCook(
                            item.recipe_id,
                            item.preparing_time,
                            item.calories
                          )
                        }
                        className="bg-green-400 p-1 lg:p-2 rounded-2xl"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr className="bg-base-200">
                  <th colSpan={5} className="text-center text-green-400">
                    You want to cooking button click
                  </th>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>

      {/* Currently cooking: part */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-center">
          Currently cooking: {currentRecipes.length}
        </h2>
        <p className="h-[1px] w-4/5 bg-[#28282826] mx-auto mt-4 mb-6"></p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentRecipes.map((recipe, idx) => (
                <tr key={idx} className="bg-base-200">
                  <th>{idx + 1}</th>
                  <td>{recipe?.recipe_name}</td>
                  <td>{recipe?.preparing_time} minutes</td>
                  <td>{recipe?.calories} calories</td>
                </tr>
              ))}
              <tr className="">
                <th></th>
                <td></td>
                <td>Total Time = {sumOfPreparingTime} minutes</td>
                <td>Total Calories = {sumOfCalories} calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

CookingItems.propTypes = {
  addNewRecipe: PropTypes.array.isRequired,
  handleCurrentlyCook: PropTypes.func.isRequired,
  currentRecipes: PropTypes.array.isRequired,
  sumOfPreparingTime: PropTypes.number.isRequired,
  sumOfCalories: PropTypes.number.isRequired,
};
export default CookingItems;
