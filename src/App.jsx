import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import AllProjects from "./pages/AllProjects";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          const navbarOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - navbarOffset,
            left: 0,
            behavior: "smooth",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <RouteScrollManager />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
