import type { ReactNode } from "react";

type TagLabelProps = {
  children: ReactNode;
  className?: string;
};

const TagLabel = ({ children, className ='' }: TagLabelProps) => {
    const classResult = `px-4 py-1.5 rounded-full cursor-default bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/60 hover:text-primary/80 transition-all duration-300 ${className}`
  return (
    <div
      
      className={classResult}
    >
      {children}
    </div>
  );
};

export default TagLabel;
