// import { footerLinks } from "../constants";
import logoPng from "/portfolio-logo.png";
import logoAvif from "/portfolio-logo.avif";
import { footerLinks, socialLinks } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("footer > div", {
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
      },
      y: -50,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    });
  }, [{ scope: footerRef }]);
  return (
    <footer ref={footerRef} className=" overflow-hidden">
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className=" flex flex-col gap-4 text-center md:text-left shrink-0">
              <a
                className="w-fit cursor-pointer focus:outline-0 group"
                tabIndex={0}
                aria-label="Home"
                href="#hero"
              >
                <picture>
                  <source srcSet={logoAvif} type="image/avif" />
                  <img
                    src={logoPng}
                    alt="<AGR/>"
                    className="h-9   p-1 drop-shadow-lg/30  drop-shadow-primary  group-focus:outline rounded-lg outline-primary"
                  />
                </picture>
              </a>
              <div className="hidden lg:block text-foreground/70 text-sm">
                <span>
                  © Alejandro Guzmán Rodríguez | All rights reserved.{" "}
                </span>
              </div>
            </div>

            <div className=" flex  items-center gap-1 ">
              <div className=" rounded-full px-2 py-1 flex flex-col md:flex-row items-center gap-1.5 ">
                {footerLinks.map((link, index) => (
                  <a
                    className="px-16 py-2 md:px-6 w-full text-center md:w-fit text-lg md:text-sm  text-muted-foreground rounded-full transition-all duration-200 focus:outline-primary focus:outline-1 hover:text-foreground hover:bg-surface focus:text-foreground focus:bg-surface "
                    key={index}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Social Links */}
            <div className="flex  items-center gap-8 md:gap-4 ">
              {socialLinks.map((social, index) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`social-${index}`}
                  className="p-2 px rounded-full glass outline-primary hover:bg-primary/10 hover:text-primary hover:outline-1  focus:text-primary focus:outline   transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          <div className="block lg:hidden text-center text-foreground/70 text-sm mt-4 pt-7 pb-2 border-t border-border">
            <span>© Alejandro Guzmán Rodríguez | All rights reserved. </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
