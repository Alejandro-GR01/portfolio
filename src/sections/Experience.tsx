import { useRef } from "react";
import TagLabel from "../components/TagLabel";
import { experiences } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Experience = () => {
  const expRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
      },
    });

    tl.from("#experience .container .max-w-3xl ", {
      opacity: 0,
      y: 300,
      duration: 1,

      ease: "power2.out",
    }).from(".experience-container ", {
      opacity: 0,
      y: 200,
      delay: -0.5,
      duration: 0.9,

      ease: "power2.out",
    });
  }, [{ scope: expRef }]);
  return (
    <section
      ref={expRef}
      id="experience"
      className="py-20 md:pb-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 ">
          <span className="text-secundary-foreground text-sm font-medium tracking-wide uppercase ">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6   text-secundary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speak volumes.
            </span>
          </h2>

        
        </div>

        <div className="relative experience-container">
          <div className="my-1 timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0  w-0.5 bg-linear-to-b from-primary/70 via-primary/40 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] " />

          <div className="absolute left-0 md:left-1/2 bottom-0 w-3 h-3 bg-radial  from-secundary to-secunday/50 rounded-full -translate-x-1/2 ring-4 ring-background/30 z-10  "></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8 ">
                {/* timeline dot */}
                <div className="testimony absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-radial from-primary to-primary/80 rounded-full -translate-x-1/2 ring-4 ring-background/50  z-10  ">
                  {exp.current && (
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-80 z-20" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:col-start-2 md:pl-16" : "  md:pr-16 "}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transiion-all duration-500 `}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-3">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    {typeof exp.description === "string" ? (
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                    ) : (
                      <ul className=" mt-4 text-sm text-muted-foreground/80">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="list-disc ml-10">
                            {" "}
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className={`flex flex-wrap gap-2 mt-4 `}>
                      {exp.technologies.map((tech, techIndex) => (
                        <TagLabel
                          key={techIndex}
                          className="px-3 py-1 text-xs "
                        >
                          {tech}
                        </TagLabel>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
