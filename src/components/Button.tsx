import type React from "react"

type ButtonProps = {
    className?: string,
    size?: 'sm' | 'default' | 'lg' ,
    type?: 'button'|'submit'
    children: React.ReactNode,
    disabled?: boolean
    onClick?: ()=> void
}


const Button = ({className ="", size ="default", children, type='button' , disabled , onClick}: ButtonProps) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none group-focus:outline-none focus-visible:ring-2 group-focus-visible:ring-2 focus-visible:ring-primary group-focus-visible:ring-primary bg-primary text-rimary-foreground hover:bg-primary/90 disabled:hover:bg-primary shadow-lg hover:shadow-xl shadow-primary/25 transition-all duration-200 ease-in"

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        default:"px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg", 
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className!}`
  return (
   <button type={type} className={`relative  flex items-center justify-center gap-2  ${classes}`} disabled={disabled} onClick={onClick}>
    {children}
   </button>
  )
}

export default Button