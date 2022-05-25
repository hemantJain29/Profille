import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
