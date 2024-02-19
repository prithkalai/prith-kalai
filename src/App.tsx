import "./App.css";
import Layout from "./Layout";
import About from "./components/About";
import PastExperience from "./components/PastExperience";
import NavBar from "./components/NavBar";
import RandomQuote from "./components/RandomQuote";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import { useRef } from "react";

function App() {
  const projRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Layout
      children={
        <>
          <NavBar
            refs={{
              ["projects"]: projRef,
              ["myexp"]: expRef,
              ["contact"]: contactRef,
            }}
          />
          <About />
          <Projects projRef={projRef} />
          <PastExperience expRef={expRef} />
          <RandomQuote />
          <ContactMe contactRef={contactRef} />
          <Footer />
        </>
      }
    />
  );
}

export default App;
