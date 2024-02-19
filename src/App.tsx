import "./App.css";
import Layout from "./Layout";
import About from "./components/About";
import PastExperience from "./components/PastExperience";
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
          <PastExperience />
        </>
      }
    />
  );
}

export default App;
