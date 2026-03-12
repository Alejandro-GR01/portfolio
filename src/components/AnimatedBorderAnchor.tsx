import type { ReactNode } from "react";
type AnimatedBorderAnchorProps = {
  children: ReactNode;
  href: string;
  download?: string;
  className?: string;
};

const AnimatedBorderAnchor = ({
  children,
  href,
  download,
  className = "",
}: AnimatedBorderAnchorProps) => {
  const classResult = ` block relative bg-transparent border border-border text-foreground hover:text-primary focus:text-primary hover:border-primary/50 focus:border-primary/50 transition-all duration-300 focus:outline-none focus-visible:outline-none!  focus:ring-2 focus:ring-primary  disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border ${className} `;
  if (download)
    return (
      <a className={classResult} href={href} download={download}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  else
    return (
      <a
        className={classResult}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
};

export default AnimatedBorderAnchor;
