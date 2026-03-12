import { useGSAP } from "@gsap/react";
import { highlightsAbout } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#about .container", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
      y: 200,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power2.out",
    });
  }, [{ scope: aboutRef }]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-12 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-secundary-foreground text-sm font-medium tracking-wide uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight  text-secundary-foreground">
              Building the future,
              <span className="text-white font-serif italic font-normal ">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground ">
              <p>
               I’m a Frontend Developer with a background in <span className="text-foreground/80">Electronics and Telecommunications Engineering</span>, passionate about web development and modern digital experiences.
              </p>
              <p>
                I enjoy building responsive and interactive interfaces using technologies like React, TypeScript, JavaScript, and Tailwind CSS, with a strong focus on performance, usability, and clean code.
              </p>
              <p>
               I’m also fascinated by the advances in artificial intelligence and enjoy exploring how these technologies can expand my knowledge and improve the way we build digital solutions.
              </p>
             
            </div>
            <div className="glass rounded-2xl p-6 glow-border ">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to continuously grow as a developer, build high-quality web applications, and evolve toward becoming a Full Stack Developer.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlightsAbout.map((item, index) => (
              <div
                key={index}
                className="glass group p-6 rounded-2xl group relative z-10 overflow-hidden"
                style={{
                  animationDelay: `${(index + 1) * 100} * ms`,
                }}
              >
                <div className="absolute -bottom-1/5 right-0 w-1/4 h-3/5 bg-primary/25 blur-3xl rounded-full group-hover:w-1/2 group-hover:h-4/5 transition-transform duration-300 ease-out" />
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex  items-center justify-center mb-4 group-hover:bg-primary/20  group-focus:bg-primary/20  transition-colors duration-300 ease-out ">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300 ease-out">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
