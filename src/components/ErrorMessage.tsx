import type { ReactNode } from "react"



const ErrorMessage = ({children}: {children?: string | ReactNode}) => {
  return (
    <div className={`w-full text-sm  text-primary  rounded-lg transition-all ease-in-out duration-200 ${children  ? 'px-4 py-2 h-auto': 'p-0! m-0! h-0 overflow-hidden'}`}>** {children} **</div>
  )
}

export default ErrorMessage