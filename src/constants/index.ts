import {
  Code2,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket, Users
} from "lucide-react";
import type {
  Certification,
  ContactInfo,
  Experience,
  FooterLink,
  HighlightAbout,
  NavLink,
  Project,
  SocialLink,
  Testimonial,
} from "../types";

import project01 from "/projects/project01.jpg";
import project02 from "/projects/project02.jpg";
import project03 from "/projects/project03.jpg";
import project04 from "/projects/project04.jpg";

import certif1Png from '/certifications/certif1.png';
import certif2Png from '/certifications/certif2.png';
import certif3Png from '/certifications/certif3.png';
import certif4Png from '/certifications/certif4.png';
import certif1Avif from '/certifications/certif1.avif';
import certif2Avif from '/certifications/certif2.avif';
import certif3Avif from '/certifications/certif3.avif';
import certif4Avif from '/certifications/certif4.avif';

import profile01 from "/profile-photo1.jpg";

export const navLinks: NavLink[] = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#certifications",
    label: "Certifications",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/Alejandro-GR01",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alejandro-guzm%C3%A1n-rodr%C3%ADguez-3985b23b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  }
];

export const skills: string[] = [
  "HTML5",
  "CSS",
  "Sass",
  "Gulp",
  "JavaScript",
  "PNPM",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Git",
  "GitHub",
  "TanStack Query",
  "Zod",
  "Zustand",
  "React Router",
  "React Hook Form",
];

export const highlightsAbout: HighlightAbout[] = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user-experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const projects: Project[] = [
  {
    title: "Beats 3",
    description:
      "Responsive product landing page inspired by Beats headphones, focused on modern UI design, structured layouts, and clear product presentation.",
    image: project01,
    tags: ["Vite", "React", "JavaScript","ESLint", "Tailwind CSS", "GSAP"],
    link: "https://alejandro-gr01.github.io/beats-3-landing/",
    github: "https://github.com/Alejandro-GR01/beats-3-landing",
  },
  {
    title: "GPT-3",
    description:
      "Responsive landing page inspired by GPT-3 and AI platforms, focused on clean UI structure, organized content sections, and modern frontend design.",
    image: project02,
    tags: ["Vite", "React", "JavaScript", "ESLint", "Tailwind CSS", "GSAP"],
    link: "https://alejandro-gr01.github.io/gpt3-landing/",
    github: "https://github.com/Alejandro-GR01/gpt3-landing",
  },
  {
    title: "MacBook Pro",
    description:
      "Interactive product landing page featuring 3D visualization and animations, built with React, Three.js, and GSAP, focused on modern UI, smooth transitions, and responsive design.",
    image: project03,
    tags: [
      "Vite",
      "React",
      "JavaScript",
      "ESLint",
      "Tailwind CSS",
      "GSAP",
      "Three JS",
      "Zustand",
    ],
    link: "https://alejandro-gr01.github.io/macbook-react-gsap-threejs/",
    github: "https://github.com/Alejandro-GR01/macbook-react-gsap-threejs",
  },
  {
    title: "HooBank",
    description:
      "Responsive fintech landing page focused on modern UI design, structured components, and clear presentation of digital financial services.",
    image: project04,
    tags: ["Vite", "React", "JavaScript", "Tailwind CSS", "GSAP", "ESLint"],
    link: "https://alejandro-gr01.github.io/hoobank-landing/",
    github: "https://github.com/Alejandro-GR01/hoobank-landing",
  },
];

export const experiences: Experience[] = [
  {
    period: "2025-2026 (6 Months)",
    role: "Frontend Developer",
    company: "UXP Programming",
    description: [
      "Development of responsive web layouts using Webflow.",
      "Implementation of custom JavaScript solutions.",
      "Complex interface and interaction problem solving.",
      "Performance improvement and cross-browser compatibility.",
      "Application of UX principles to improve usability.",
    ],
    technologies: ["Webflow", "JavaScript", "HTML", "CSS"],
    current: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "AAAAAAipsum dolor sit amet ",
    author: "Sara Chen",
    role: "CTO, Tech Innovation Inc.",
    avatar: profile01,
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "alejandrogr01dev@gmail.com",
    href: "mailto:alejandrogr01dev@gmail.com?subject=Laboral%20Oportunity%20Portfolio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+5356257921",
    href: "tel:+5356257921",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "La Palma, Pinar del Rio, Cuba",
    href: "https://maps.app.goo.gl/psMBGjKjvd6euCc8A",
  },
];

export const footerLinks: FooterLink[] = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#certifications",
    label: "Certifications",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const certifications: Certification[] = [
  {
    name: "Beginner's TypeScript",
    school: "TotalTypescript",
    imagePng: certif1Png,
    imageAvif: certif1Avif,
    link: certif1Png,
    period: "12/24 - 3/25",
    description:
      "Interactive tutorial teaching TypeScript fundamentals through practical exercises. Covers typing variables, functions, and errors while introducing modern tooling. Builds a solid foundation for confident use of TypeScript in real-world projects.",

  },
  {
    name: "Solving TypeScript Errors",
    school: "TotalTypescript",
    imagePng: certif2Png,
    imageAvif: certif2Avif,
    link: certif2Png,
    period: "1/25 - 3/25",
    description:
      "Hands-on tutorial for identifying and fixing common TypeScript errors. Learn to interpret compiler messages and apply correct type solutions. Builds debugging skills and confidence in real-world TypeScript projects.",
 
  },
  {
    name: "React Router",
    school: "DevTalles",
    imagePng: certif3Png,
    imageAvif: certif3Avif,
    link: certif3Png,
    period: "8/2025 - 10/25",
    description:
      "Course focused on implementing client-side routing in React applications. Covers navigation, dynamic routes, route protection, and layout structuring with React Router. Strengthens skills for building scalable and well-structured React applications.",
 
  },
  {
    name: "TanStack Query",
    school: "DevTalles",
    imagePng: certif4Png,
    imageAvif: certif4Avif,
    link: certif4Png,
    period: "10/25 - 11/25",
    description:
      "Focused on efficient data fetching and server-state management in React using TanStack Query. Covers caching strategies, mutations, background refetching, and API synchronization. Emphasizes building scalable and performant applications with modern data-handling patterns.",
 
  },
];
