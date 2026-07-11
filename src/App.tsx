import { useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "./layouts/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
// import Testimonials from "./sections/Testimonials";
import Footer from "./layouts/Footer";
import Certifications from "./sections/Certifications";
import LangButton from "./components/LangButton";
import { useLanguage } from "./i18n";

const App = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.title =
      language === "es"
        ? "Alejandro Guzmán | Portfolio"
        : "Alejandro Guzmán | Portfolio";
  }, [language]);

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <LangButton language={language} handleLanguage={handleLanguage} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Experience />
          {/* To do */}
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
