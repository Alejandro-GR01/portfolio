import { useCallback, useEffect } from "react";
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
  const { language, setLanguage, t } = useLanguage();

  const handleLanguage = useCallback(() => {
    setLanguage(language === "es" ? "en" : "es");
  }, [language, setLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "es"
        ? "Alejandro Guzmán | Portfolio"
        : "Alejandro Guzman | Portfolio";
  }, [language]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        {t.a11y.skipToContent}
      </a>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <LangButton language={language} handleLanguage={handleLanguage} ariaLabel={t.a11y.toggleLanguage} />
        <main id="main">
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
