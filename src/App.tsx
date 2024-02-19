import "./App.css";
import Layout from "./Layout";
import About from "./components/About";
import PastExperience from "./components/PastExperience";
import NavBar from "./components/NavBar";
import RandomQuote from "./components/RandomQuote";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

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
          <ContactMe />
          <Footer />
        </>
      }
    />
  );
}

export default App;
