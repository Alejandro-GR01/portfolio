import { ArrowUpRightIcon, Github } from "lucide-react";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import TagLabel from "../components/TagLabel";
// import AnimatedBorderAnchor from "../components/AnimatedBorderAnchor";

const Projects = () => {
  const projectsRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#projects .container", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
      },
      y: 200,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power2.out",
    });
  }, [{ scope: projectsRef }]);
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-12 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/6 left-0 w-120 h-120 bg-highlight/12 rounded-full blur-3xl" />
      <div className="absolute top-1/6 right-0 w-120 h-120 bg-primary/12 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase ">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6  text-secundary-foreground">
            Projects that
            <span
              className="font-serif italic fornt-norm
             text-white"
            >
              {""} make an impact
            </span>
          </h2>
          <p className="text-muted-foreground ">
            A selection of my recent work, form complex web applications to
            innovative tools that solve real-word problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden "
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <picture>
                  <source srcSet={project.imageAvif} type="image/avif" />
                <img
                  loading="lazy"
                  src={project.imagePng}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                </picture>
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to bg-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700 " />

                {/* overlay Links */}

                <a
                  aria-label={`go to project-lik ${project.link} `}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-12 h-12  absolute top-0 bottom-0 left-[30%] m-auto  flex items-center justify-center gap-4 lg:opacity-0 outline-primary focus:outline  group-hover:opacity-100 p-3 rounded-full glass  hover:bg-primary/70 hover:text-primary-foreground focus:opacity-100  focus:bg-primary/70 focus:text-primary-foreground transition-all duration-300"
                >
                  <ArrowUpRightIcon className="w-5 h-5" />
                </a>
                <a
                  aria-label={`go to github-lik ${project.github} `}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-12 h-12  absolute top-0 bottom-0 right-[30%]  m-auto  flex items-center justify-center gap-4 lg:opacity-0 outline-primary focus:outline  group-hover:opacity-100  p-3 rounded-full glass hover:bg-primary/70 hover:text-primary-foreground focus:opacity-100  focus:bg-primary/70 focus:text-primary-foreground  transition-all duration-300  "
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">
                    {project.title}
                  </h3>
                  <ArrowUpRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-700 " />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, tagIndex) => (
                    <TagLabel key={tagIndex} >
                         {tag}
                    </TagLabel>
                    
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-16 ">
          <AnimatedBorderAnchor href="#" className="w-fit mx-auto" >
            View All Projects
            <ArrowUpRightIcon className="w-5 h-5" />
          </AnimatedBorderAnchor>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
