import type { LucideProps } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
};

export type HighlightAbout = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string,
  github: string
};


export type Experience= {
  period: string,
  role: string,
  company: string,
  description: string | string[],
  technologies: string[],
  current: boolean,
}


export type Testimonial ={
  quote: string,
  author: string,
  role: string,
  avatar: string
}

export type ContactInfo = {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
  label: string,
  value: string,
  href: string
}

export type FooterLink = {
  href: string,
  label: string
}

export type Certification = {
    name: string,
    school: string,
    imagePng: string,
    imageAvif: string,
    link: string,
    period: string,
    description:string,
  }


