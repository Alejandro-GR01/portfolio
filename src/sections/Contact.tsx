import { Loader2Icon, Send } from "lucide-react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { contactInfo } from "../constants";
import { useLanguage } from "../i18n";

type ContactFormProps = {
  name: string;
  email: string;
  message: string;
};



const Contact = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mergedContactInfo = contactInfo.map((item, i) => ({ ...item, ...t.contactInfo[i] }));

  
  const defaultFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps>({ defaultValues: defaultFormValues });
  
  
  const handleSubmitForm = async (data: ContactFormProps) => {
    setIsLoading(true);
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }
      const time = new Date(Date.now()).toLocaleString()
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
          time: time,
        },
        publicKey,
      );

      toast.success(t.contactData.toast_success, {
        style: {
          color: "#10b981",
          background: "color-mix(in srgb, #1a2329 90%, transparent)",
          border: "1px solid #10b981",
        },
      });

      reset();
    } catch (error) {
      let message 
      if(typeof(error) === 'string'){
        message = error
      }else if(error instanceof Error){
        message = error.message
      }
     

      toast.error(
        `${message || t.contactData.toast_error}`,
        {
          style: {
            color: "#ef4444",
            background: "color-mix(in srgb, #1a2329 90%, transparent)",
            border: "1px solid #ef4444",
          },
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className=" py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 bottom-0 right-0 left-0 ">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl " />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-highlight/10  rounded-full blur-3xl " />
      </div>
      <div
        id="contact-wrapper"
        className="container mx-auto px-6 relative z-10"
      >
        <div className=" text-center mx-auto max-w-3xl mb-16">
          <span className="text-secundary-foreground text-sm font-medium tracking-wider uppercase ">
            {t.contactData.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6  text-secundary-foreground">
           {t.contactData.h2_1}
            <span
              className="font-serif italic font-normal
             text-white"
            >
              {" "}
              {t.contactData.h2_span}
            </span>
          </h2>
          <p className="text-muted-foreground">
           {t.contactData.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
          <div className="glass p-6  md:p-8 rounded-3xl border border-primary/30  ">
            <form
              className=" flex flex-col gap-6  h-full"
              noValidate
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contactData.form_name}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t.contactData.form_name__placeholder}
                  className={`w-full px-4 py-3 bg-surface rounded-xl border border-border ${errors.name && "border-primary outline outline-primary"} focus:border-primary focus:outline-1   outline-primary transition-all ease-in `}
                  {...register("name", {
                    required: t.contactData.form_name__required,
                  })}
                />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contactData.form_email}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t.contactData.form_email_placeholder}
                  className={`w-full px-4 py-3 bg-surface rounded-xl border border-border ${errors.email && "border-primary outline outline-primary"} focus:border-primary focus:outline-1   outline-primary transition-all ease-in `}
                  {...register("email", {
                    required: t.contactData.form_email__required,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:  t.contactData.form_email__invalid,
                    },
                  })}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contactData.from_message}
                </label>

                <textarea
                  rows={5}
                  id="message"
                  placeholder={t.contactData.from_message}
                  className={`m-0! w-full px-4 py-3 bg-surface rounded-xl border border-border  ${errors.email && "border-primary outline outline-primary"} focus:border-primary focus:outline-1   outline-primary transition-all ease-in resize-none `}
                  {...register("message", {
                    required: t.contactData.form_message__required,
                  })}
                />
                <ErrorMessage>{errors.message?.message}</ErrorMessage>
              </div>

              <Button
                className="w-full disabled:opacity-70 disabled:cursor-not-allowed lg:mt-10 "
                size="lg"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    {t.buttonText.sendingMessage}
                    <Loader2Icon className="mx-1 w-6 h-6 animate-rotate" />
                  </>
                ) : (
                  <>
                    {t.buttonText.sendMessage}
                    <Send className="w-6 h-6" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6 lg:space-y-12 flex flex-col justify-stretch">
            <div className="glass rounded-3xl p-6 md:p-8 grow">
              <h3 className="text-xl font-semibold mb-6 px-4">
                {t.contactData.contact_title}
              </h3>

              <div className="space-y-4">
                {mergedContactInfo.map((item, i) => (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-${i}`}
                    className="flex flex-col md:flex-row  md:items-center gap-4 p-3  md:p-4 rounded-xl outline-primary/60 hover:bg-surface focus:outline focus:outline-primary/60 focus-within:outline-primary/60 focus:bg-surface  transition-colors ease-in  duration-200  group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/50 group-focus:bg-primary/50 transition-colors duration-200 ease-in ">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-foreground group-focus:text-foreground transition-colors  duration-200 " />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground group-focus:text-foreground transition-colors  duration-200">
                        {item.label}
                      </div>
                      <div className="font-medium group-hover:text-primary group-focus:text-primary transition-colors  duration-200">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="glass grow rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-medium text-xl">{t.contactData.available_title}</span>
              </div>
              <p className="text-muted-foreground text-sm">
               {t.contactData.available_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
