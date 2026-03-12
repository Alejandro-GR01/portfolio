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

const App = () => {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Certifications/>
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
