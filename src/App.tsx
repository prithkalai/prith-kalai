import "./App.css";
import Layout from "./Layout";
import About from "./components/About";
import PastExperience from "./components/PastExperience";
import NavBar from "./components/NavBar";
import RandomQuote from "./components/RandomQuote";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Index";

function App() {
  return (
    <Layout
      children={
        <>
          <NavBar />
          <About />
          <Projects />
          <PastExperience />
          <RandomQuote />
          <Footer />
        </>
      }
    />
  );
}

export default App;
