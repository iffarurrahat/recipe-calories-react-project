import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
      </Container>
    </>
  );
}

export default App;
