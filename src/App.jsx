import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Recipes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
