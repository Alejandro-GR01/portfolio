import { Menu, X } from "lucide-react";

import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import logoPng from "/portfolio-logo.png";
import logoAvif from "/portfolio-logo.avif";

import ButtonAnchor from "../components/ButtonAnchor";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e) {
      e.stopPropagation();
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const handleEsc = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Escape") {
      handleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong " : "bg-transparent"} border-none! transition-all duration-500 ease-out    z-20`}
    >
      <nav
        className="relative z-20 container mx-auto py-5 px-6 flex items-center justify-between"
        onKeyDown={handleEsc}
      >
        <a
          className="cursor-pointer p-2 hover:scale-102 transition-all duration-300 ease-out outline-primary focus:outline-2 rounded-lg "
          tabIndex={0}
          aria-label="Home"
          href="#"
        >
          <picture>
            <source srcSet={logoAvif} type="image/avif" />
            <img
            fetchPriority="high"
            loading="eager"
              src={logoPng}
              alt="<AGR/>"
              className="w-auto h-7 md:h-9 drop-shadow-lg/30  drop-shadow-primary "
            />
          </picture>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 ">
            {navLinks.map((link, index) => (
              <a
                className="px-4 py-2 text-sm text-muted-foreground rounded-full transition-all duration-200 focus:outline-primary focus:outline-1 hover:text-foreground hover:bg-surface focus:text-foreground focus:bg-surface  "
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}

        <ButtonAnchor
          size="sm"
          className="hidden h-fit w-fit md:block rounded-4xl group outline-0"
          href="#contact"
        >
          Contact Me
        </ButtonAnchor>

        {/* Mobile Menu Button */}
        <button
          className=" md:hidden p-2 text-foreground cursor-pointer  outline-primary focus:outline-2 rounded-xl "
          onClick={handleMenu}
          aria-label="toogle-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Menu */}

        <div
          className={`md:hidden absolute z-20 top-[98%] left-0 right-0  glass-strong rounded-b-2xl overflow-hidden  ${isMobileMenuOpen ? "animate-fade-in" : "fade-out"}`}
        >
          <div className="container  bg-surface/70 backdrop-blur-lg  mx-auto p-6 flex flex-col gap-4 items-center">
            {navLinks.map((link, index) => (
              <a
                className="text-lg px-4 text-muted-foreground hover:text-foreground py-2 outline-primary focus:outline-2 rounded-xl"
                key={index}
                href={link.href}
                onClick={handleMenu}
                onKeyDown={handleEsc}
              >
                {link.label}
              </a>
            ))}

            <ButtonAnchor
              className="w-full sm:w-fit mx-auto flex flex-col sm:justify-center group outline-0"
              href="#contact"
            >
              Contact Me
            </ButtonAnchor>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            className="absolute z-10 bg-trasparent  top-0 left-0 right-0 h-svh "
            onClick={handleMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
