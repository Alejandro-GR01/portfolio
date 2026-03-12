import { ArrowUpRightIcon } from "lucide-react";
import { certifications } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Certifications = () => {
  const certificationRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#certifications",
        start: "top 80%",
      },
    });

    tl.from("#certifications .text-center.mx-auto ", {
      opacity: 0,
      duration: 0.9,

      ease: "power2.out",
    }).from("#certifications a.group.glass", {
      opacity: 0,
      y: 200,
      scale: 0.6,
      stagger: 0.2,
      delay: -0.9,
      duration: 0.9,

      ease: "power2.out",
    });
  }, [{ scope: certificationRef }]);
  return (
    <section
      ref={certificationRef}
      id="certifications"
      className=" py-12 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 ">
        <div className="absolute bottom-20 left-1/5 w-96 h-96 bg-primary/25 rounded-full blur-3xl " />
        <div className="absolute top-20 right-1/5 w-96 h-64 bg-highlight/10  rounded-full blur-3xl " />
      </div>
      <div
        id="contact-wrapper"
        className="container mx-auto px-6 relative z-10"
      >
        <div className=" text-center mx-auto max-w-3xl mb-16">
          <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase ">
            Certifications & Courses
          </span>
          <h2 className="text-4xl  md:text-5xl font-bold mt-4 mb-6  text-secundary-foreground">
            Commitment to
            <span
              className="font-serif italic fornt-normal
             text-white"
            >
              {" "}
              Continuous Learning
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-9   gap-5">
          {certifications.map((certif, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={certif.link}
              className={`group glass flex flex-col outline-primary focus:outline-2 items-between rounded-2xl overflow-hidden col-span-9 ${index % 4 === 0 || index % 3 == 0 ? " lg:col-span-5" : " lg:col-span-4"} ${index === certifications.length - 1 && certifications.length % 2 !== 0 && "lg:col-span-9 "}  `}
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              {/* Images */}
              <div className={` relative overflow-hidden  h-[40svh] `}>
                <picture>
                  <source srcSet={certif.imageAvif} type="image/avif" />
                  <img
                    src={certif.imagePng}
                    alt={certif.name}
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                </picture>
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to bg-transparent opacity-40 group-hover:opacity-90 group-focus:opacity-100  transition-opacity duration-500 " />
              </div>

              {/* Content */}
              <div
                className={`p-6 transition-all duration-500 glass group-hover:h-auto absolute -bottom-50 opacity-0 group-hover:opacity-100 group-hover:bottom-0.5 group-focus:opacity-100 group-focus:bottom-0 -left-0.5 -right-0.5  space-y-4 shrink-0 grow flex flex-col justify-between`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-primary transition-colors ">
                        {certif.name}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <span className="text-sm font-semibold  text-foreground/60">
                          {certif.school}
                        </span>
                        <span className=" text-xs text-foreground/60">
                          {certif.period}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRightIcon className="w-5 h-5  text-primary  transition-all shrink-0 " />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {certif.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
