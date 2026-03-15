import { useEffect, useState } from "react";
import "./index.css";
import type { WritingEntry, Project, Experience, Quote } from "./types";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import WritingSection from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [writing, setWriting] = useState<WritingEntry[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/data/experience.json").then((r) => r.json()),
      fetch("/data/projects.json").then((r) => r.json()),
      fetch("/data/writing.json").then((r) => r.json()),
      fetch("/data/quotes.json").then((r) => r.json()),
    ]).then(([exp, proj, writ, quotes]: [Experience[], Project[], WritingEntry[], Quote[]]) => {
      setExperience(exp);
      setProjects(proj);
      setWriting(writ);
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    });
  }, []);

  return (
    <>
      <Nav />
      <div className="page">
        <Hero />
        <About />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <WritingSection writing={writing} />
        <Contact />
        <Footer quote={quote} />
      </div>
    </>
  );
}
