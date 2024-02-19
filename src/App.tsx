import "./App.css";
import Layout from "./Layout";
import About from "./components/About";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <Layout
      children={
        <>
          <NavBar />
          <About />
          <Projects />
          <Experience />
        </>
      }
    />
  );
}

export default App;
