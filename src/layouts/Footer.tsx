import { socialLinks } from "../constants";
import { useLanguage } from "../i18n";
import logoPng from "/portfolio-logo.png";
import logoAvif from "/portfolio-logo.avif";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className=" overflow-hidden">
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
            <div className=" flex flex-col items-center gap-4 text-center xl:text-left shrink-0">
              <a
                className="w-fit cursor-pointer focus:outline-0 group"
                aria-label={t.a11y.home}
                href="#hero"
              >
                <picture>
                  <source srcSet={logoAvif} type="image/avif" />
                  <img
                    src={logoPng}
                    alt={t.a11y.logo}
                    className="h-9   p-1 drop-shadow-lg/30  drop-shadow-primary  group-focus:outline rounded-lg outline-primary"
                  />
                </picture>
              </a>
              <div className="hidden xl:block text-foreground/70 text-sm">
                <span>{t.footerData.copyright} </span>
              </div>
            </div>

            <nav className=" flex  items-center gap-1 " aria-label={t.a11y.footerNav}>
              <div className=" rounded-full px-2 py-1 flex flex-col md:flex-row items-center gap-1.5 ">
                {t.footerLinks.map((link, index) => (
                  <a
                    className="shrink-0 px-16 py-2 md:px-6 w-full text-center md:w-fit text-lg md:text-sm  text-muted-foreground rounded-full transition-all duration-200 focus:outline-primary focus:outline-1 hover:text-foreground hover:bg-surface focus:text-foreground focus:bg-surface "
                    key={index}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Social Links */}
            <div className="flex  items-center gap-8 md:gap-4 ">
              {socialLinks.map((social, index) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`social-${index}`}
                  aria-label={social.name}
                  className="p-2 px rounded-full glass outline-primary hover:bg-primary/10 hover:text-primary hover:outline-1  focus:text-primary focus:outline   transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          <div className="block xl:hidden text-center text-foreground/70 text-sm mt-4 pt-7 pb-2 border-t border-border">
            <span>{t.footerData.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
