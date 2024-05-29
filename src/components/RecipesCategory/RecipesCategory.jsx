import categoryImg1 from "./../../assets/sweet.jpg";
import categoryImg2 from "./../../assets/burger.jpg";
import categoryImg3 from "./../../assets/drinks.jpg";
import categoryImg4 from "./../../assets/pizza.jpg";
import "./RecipesCategory.css";
import Container from "../ui/Container";

const RecipesCategory = () => {
  return (
    <Container>
      <div className="mt-12 md:mt-24">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-medium">
            Recipes By Category
          </h1>
          <p className="md:h-2/3 lg:w-1/2 mx-auto mt-3 md:mt-6">
            Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
            officia deserunmollit anim id est laborum.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          <div className="category group">
            <img
              src={categoryImg1}
              alt="sweet"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="category_gradient">
              <h2 className="text-2xl md:text-3xl text-center text-white font-semibold -mt-8 md:-mt-10">
                Sweets
              </h2>
            </div>
          </div>
          <div className="category group">
            <img
              src={categoryImg2}
              alt="burger"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="category_gradient">
              <h2 className="text-2xl md:text-3xl text-center text-white font-semibold -mt-8 md:-mt-10">
                Burger
              </h2>
            </div>
          </div>
          <div className="category group">
            <img
              src={categoryImg3}
              alt="drinks"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="category_gradient">
              <h2 className="text-2xl md:text-3xl text-center text-white font-semibold -mt-8 md:-mt-10">
                Drinks
              </h2>
            </div>
          </div>
          <div className="category group">
            <img
              src={categoryImg4}
              alt="pizzas"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="category_gradient">
              <h2 className="text-2xl md:text-3xl text-center text-white font-semibold -mt-8 md:-mt-10">
                Pizzas
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecipesCategory;
