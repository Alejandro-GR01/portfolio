
import type { ReactNode } from "react"
type AnimatedBorderButtonProps = {
  children :ReactNode,
  handleClick? : ()=> void
} 

const AnimatedBorderButton = ({children}: AnimatedBorderButtonProps) => {
  return (
   <button className="relative bg-transparent border border-border text-foreground hover:text-primary focus:text-primary hover:border-primary/50 focus:border-primary/50 transition-all duration-300 focus:outline-none focus-visible:outline-none!  focus:ring-2 focus:ring-primary  disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border ">
                 <span className="relative z-10 flex items-center justify-center gap-2">
                  {children}
                 </span>
              </button>
  )
}

export default AnimatedBorderButton