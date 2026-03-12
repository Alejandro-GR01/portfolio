import { ChevronDown, LucideArrowRight, LucideDownload } from "lucide-react";
import { skills, socialLinks } from "../constants";

import heroBg from "/hero-bg.jpg";
import profilFoto from "/profile-photo.png";
import ButtonAnchor from "../components/ButtonAnchor";
import AnimatedBorderAnchor from "../components/AnimatedBorderAnchor";
import CV from '/cv.pdf';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0  animate-space">
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-bac/80 to-background"></div>
      </div>

      <div className="container mx-auto px-6 my-12 py-18 md:pt-32 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Column -text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in_short ">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in_short  animation-delay-100">
                Turning{' '}  
                 <span className="text-primary glow-text animate-glow-shutDown">ideas</span>
                <br />
                into modern web {' '}
                 <span className="text-primary glow-text  animate-glow-shutDown">experiences.</span>
                <br />
                {/* <span className="font-serif italic font-normal text-white">
                  precision
                </span> */}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in_short  animation-delay-200">
                Hi, I'm {' '}
                <b className="text-foreground/80 font-medium">
                  Alejandro Guzman
                </b>
                . I build scalable and high-performance web applications using React and TypeScript.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in_short animation-delay-300">
              <ButtonAnchor
                size="lg"
                className="flex gap-0 hover:gap-4 hover:pr-6 group-focus:gap-4 group-focus:pr-6"
                href="#contact"
              >
                Contact Me <LucideArrowRight className="w-5 h-5" />
              </ButtonAnchor>

              <AnimatedBorderAnchor href={CV} download="CV-Alejandro_Guzmán_Rodríguez.pdf">
                <LucideDownload className="w-5 h-5" />
                Download CV
              </AnimatedBorderAnchor>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in_short animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social, index) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={`social-${index}`}
                  aria-label={`${social.name}-${social.href}`}
                  className="p-2 rounded-full glass outline-primary hover:bg-primary/10 hover:text-primary hover:outline-1  focus:text-primary focus:outline   transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column -Profile Image */}
          <div className="relative animate-fade-in_short animation-delay-400">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute w-full h-full  rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-0.5 glow-border">
                <img
                  src={profilFoto}
                  alt="Alejandro Guzman"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 animate-fade-in_short animation-delay-600">
                  {/* Floating Badge */}

                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float ">
                    <div className="text-2xl font-bold text-primary glow-text ">
                      5+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Months Exp.
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse " />
                      <span className="text-sm font-medium">
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-20 animate-fade-in_short animation-delay-800 ">
          <p className="text-lg font-extralight text-muted-foreground/80 mb-6 text-center">
            Technologies I work with
          </p>
          <div className=" ml-[50%] relative overflow-hidden w-svw -translate-x-1/2  pt-4 ">
            <div
              className={`relative grid pl-4  gap-4 justify-evenly marquee w-fit animate-marquee z-10`}
              style={{
                gridTemplateColumns: `repeat(${skills.length * 4} , 1fr)`,
              }}
            >
              {[...skills, ...skills, ...skills, ...skills].map(
                (skill, index) => (
                  <div
                    key={`skill-${index}`}
                    className="shrink-0 min-w-fit  px-8 py-4"
                  >
                    <span className="text-nowrap text-cl font-semibold text-foreground/40 hover:text-muted-foreground transition-colors ease-in-out duration-200 cursor-default ">
                      {skill}
                    </span>
                  </div>
                ),
              )}
            </div>
            <div className="absolute  top-0 bottom-0 -right-1 -left-1 bg-linear-to-r from-0% via-10% to-100%  from-background via-transparent to-transparent z-20" />
            <div className="absolute  top-0 bottom-0 -right-1 -left-1 bg-linear-to-l from-0% via-10% to-100%  from-background via-transparent to-transparent  z-20" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-fade-in_short animation-delay-900 z-10 ">
        <a
          href="#about"
          className="flex flex-col p-1 rounded-lg items-center gap-2 text-muted-foreground hover:text-foreground/80 transition-colors duration-100 ease-out focus:outline-none focus:scale-105 focus:border "
        >
          <p className="text-sm uppercase tracking-wide">Scroll</p>
          <ChevronDown className="w-6 h-6 animate-bounce " />
        </a>
      </div>
    </section>
  );
};

export default Hero;
