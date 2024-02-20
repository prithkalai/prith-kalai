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
import PersonalContent from "./components/PersonalContent";
import TechStack from "./components/TechStack";
import { inject } from "@vercel/analytics";

inject();

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  return (
    <Layout
      children={
        <>
          <NavBar
            refs={{
              ["projects"]: projRef,
              ["myexp"]: expRef,
              ["contact"]: contactRef,
              ["about"]: aboutRef,
              ["tech"]: techRef,
            }}
          />
          <About />
          <Projects projRef={projRef} />
          <PastExperience expRef={expRef} />
          <TechStack techRef={techRef} />
          <PersonalContent aboutRef={aboutRef} />
          <RandomQuote />
          <ContactMe contactRef={contactRef} />
          <Footer />
        </>
      }
    />
  );
}

export default App;
