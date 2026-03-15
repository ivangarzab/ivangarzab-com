import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <div className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
