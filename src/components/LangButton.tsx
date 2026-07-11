type LangButtonProps = {
    language: "es" | "en",
     handleLanguage: () => void
}

const LangButton = ({language, handleLanguage}:LangButtonProps) => {
     
  return (
    <button onClick={handleLanguage} className="  h-8 overflow-hidden group focus-within:outline outline-primary  flex items-center justify-center fixed z-50 top-18 md:top-20 right-6 md:right-15  rounded-full  text-foreground/80 focus-visible:text-primary/70 group-focus-visible:text-primary/70  hover:text-primary/70  glass  focus-visible:backdrop-blur-md shadow-none  transition-all duration-200 ease-in ">
      <span className={`text-xs p-2 transition-all ease-in-out duration-200  ${language === 'es' ? 'bg-secundary-foreground/50  text-foreground': 'text-muted-foreground'} `}>ES</span>
      {/* <span className="h-8 w-px bg-foreground/50 flex-1" /> */}
      <span className={`text-xs p-2 transition-all ease-in duration-200   ${language === 'en' ? 'bg-secundary-foreground/50  text-foreground': 'text-muted-foreground'}`}>EN</span>
    </button>
  );
};

export default LangButton;
