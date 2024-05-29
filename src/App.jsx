import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurNewsletter from "./components/OurNewsletter/OurNewsletter";
import Recipes from "./components/Recipes/Recipes";
import RecipesCategory from "./components/RecipesCategory/RecipesCategory";
import Testimonial from "./components/Testimonial/Testimonial";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Recipes />
      </Container>
      <OurNewsletter />
      <RecipesCategory />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
