import PropTypes from "prop-types";
const CookingItems = ({ addNewRecipe }) => {
  //   console.log(addNewRecipe);
  return (
    <>
      {/* Want to cook:: part */}
      <div>
        <h2 className="text-2xl font-medium text-center mt-6">
          Want to cook: 01
        </h2>
        <p className="h-[1px] w-4/5 bg-[#28282826] mx-auto mt-4 mb-6"></p>
        <div className=" font-medium text-[#878787] text-xs lg:text-base">
          <div className="flex pl-6 lg:pl-10 gap-5 mb-4">
            <p>Name</p>
            <p className="ml-8 sm:ml-40 lg:ml-24">Time</p>
            <p className="ml-2 sm:ml-7 lg:ml-5">Calories</p>
          </div>
          {addNewRecipe.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-2 lg:gap-5 p-3 bg-[#28282808] text-[#282828B3] mb-8"
            >
              <p>{idx + 1}</p>
              <p className="w-24 sm:w-48 lg:w-52">{item.recipe_name}</p>
              <p>{item.preparing_time} minutes</p>
              <p>{item.calories} calories</p>
              <button className="bg-green-400 p-1 lg:p-2 rounded-2xl">
                Preparing
              </button>
            </div>
          ))}
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
    </>
  );
};

CookingItems.propTypes = {
  addNewRecipe: PropTypes.array.isRequired,
};
export default CookingItems;
