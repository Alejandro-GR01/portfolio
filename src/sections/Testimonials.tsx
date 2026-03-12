import { Quote } from "lucide-react";
import { testimonials } from "../constants";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  // Slider Tracker logic
  // const [activeIdx, setActiveIdx] = useState(0);

  // const translate = () => {
  //   const testimonials = document.querySelectorAll(
  //     "#testimonial-mask .testimonial-item",
  //   );

  //   if (!testimonials) return;
  //   const testimonyWidth = testimonials[0].clientWidth;

  //   [...testimonials].map((testimony) => {
  //     testimony.style.transform = `translateX(-${activeIdx * testimonyWidth + 32 * activeIdx}px)`;
  //   });
  // };

  // const next = () => {
  //   if (activeIdx < testimonials.length - 1) {
  //     setActiveIdx((prev) => prev + 1);
  //   }
  // };

  // const prev = () => {
  //   if (activeIdx === 0) {
  //     return;
  //   }
  //   setActiveIdx((prev) => prev - 1);
  // };
  // useEffect(() => {
  //   translate();
  // }, [activeIdx]);

  const testimonialRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    

    gsap.from("#testimonials .container", {
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
      },
      y: 200,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power2.out",
      
    })
  }, [{ scope: testimonialRef }]);

  const setMaxHeight = (containerClass: string, childrensClass: string) => {
    const container = document.querySelector(
      containerClass,
    ) as HTMLElement | null;
    if (!container) return;
    const childrens = container.querySelectorAll(childrensClass);

    if (!childrens) return;
    let maxHeight = 0;
    [...childrens].map((children) => {
      if (children.clientHeight > maxHeight)
        maxHeight = children.getClientRects()[0].height;
    });
    container.style.height = `${maxHeight}px`;
  };

  useEffect(() => {
    setMaxHeight("#testimonial-mask", ".testimonial-item");
  }, []);

  window.addEventListener("resize", () => {
    setMaxHeight("#testimonial-mask", ".testimonial-item");
    // translate();
  });

  return (
    <section
      ref={testimonialRef}
      id="testimonials"
      className="py-20  md:pt-32 md:pb-50  relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-4/5 h-[200svh] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase ">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6  text-secundary-foreground">
            Kind words from
            <span
              className="font-serif italic font-normal
             text-white"
            >
              {""} amazing people.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col  items-stretch gap-8">
          <div id="testimonial-mask" className="relative w-full">
            <div className="relative  flex gap-8  ">
              {/* One Testimony */}
              <div className="ml-[50%] -translate-x-[50%]   w-full min-w-[85svw] md:min-w-3xl  top-20 glass p-8 rounded-3xl md:p-12 glow-border  flex flex-col justify-between testimonial-item transition-all ease-in-out duration-300">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                <blockquote className="text-lg md:text-xl font-extralight leading-relaxed mb-8 pt-4">
                  "{testimonials[0].quote}"
                </blockquote>
                <div className="flex items-center  gap-4">
                  <img
                    src={testimonials[0].avatar}
                    alt={testimonials[0].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <div className="font-semibold">
                      {testimonials[0].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[0].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sliders items */}
              {/* {testimonials.map((testimony, index) => (
                <div
                  key={index}
                  className="   w-full min-w-[85svw] md:min-w-3xl  top-20 glass p-8 rounded-3xl md:p-12 glow-border  flex flex-col justify-between testimonial-item transition-all ease-in-out duration-300"
                  style={{
                    transform: `translateX(${activeIdx})`,
                  }}
                >
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <blockquote className="text-lg md:text-xl font-extralight leading-relaxed mb-8 pt-4">
                    "{testimony.quote}"
                  </blockquote>
                  <div className="flex items-center  gap-4">
                    <img
                      src={testimony.avatar}
                      alt={testimony.author}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="flex flex-col items-start gap-1">
                      <div className="font-semibold">{testimony.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimony.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>

            {/* Slider tracker */}
            {/* <div className="absolute -bottom-20 left-0 right-0 flex items-center justify-center gap-6 ">
              <button
                className="disabled:bg-primary/0  disabled:text-muted-foreground disabled:opacity-80 disabled:cursor-not-allowed p-3 rounded-full glass hover:bg-primary/10 hover:text-primary focus:outline-primary  focus-visible:outline-none focus:border-primary/20 focus:bg-primary/10 focus:text-primary transition-all "
                disabled={activeIdx === 0}
                onClick={prev}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    type="button"
                    aria-label={`tesimonial ${index + 1} of ${testimonials.length}`}
                    key={index}
                    onClick={() => setActiveIdx(index)}
                    disabled={index === activeIdx}
                    className={`w-2.5 h-2.5 transition-all outline-primary rounded-full duartion-300 ${index === activeIdx ? "w-8 bg-primary focus:outline-none" : "focus:outline-1  bg-muted-foreground/30 hover:bg-muted-foreground/50"}   `}
                  ></button>
                ))}
              </div>

              <button
                disabled={activeIdx + 1 === testimonials.length}
                className=" disabled:bg-primary/0  disabled:text-muted-foreground disabled:opacity-80 disabled:cursor-not-allowed  p-3 rounded-full glass hover:bg-primary/10 hover:text-primary focus:outline-primary  focus-visible:outline-none focus:border-primary/20 focus:bg-primary/10 focus:text-primary transition-all "
                onClick={next}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
