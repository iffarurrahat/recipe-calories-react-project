import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurNewsletter from "./components/OurNewsletter/OurNewsletter";
import Recipes from "./components/Recipes/Recipes";
import RecipesCategory from "./components/RecipesCategory/RecipesCategory";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Recipes />
        <RecipesCategory />
      </Container>
      <OurNewsletter />
      <Footer />
    </>
  );
}

export default App;
