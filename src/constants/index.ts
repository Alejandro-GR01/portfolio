import {
  Code2,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Users,
} from "lucide-react";
import type {
  Certification,
  ContactInfo,
  Experience,
  HighlightAbout,
  Project,
  SocialLink,
  Testimonial,
} from "../types";

import project01Png from "/projects/project01.jpg";
import project02Png from "/projects/project02.jpg";
import project03Png from "/projects/project03.jpg";
import project04Png from "/projects/project04.jpg";
import project01Avif from "/projects/project01.avif";
import project02Avif from "/projects/project02.avif";
import project03Avif from "/projects/project03.avif";
import project04Avif from "/projects/project04.avif";

import certif1Png from "/certifications/certif1.png";
import certif2Png from "/certifications/certif2.png";
import certif3Png from "/certifications/certif3.png";
import certif4Png from "/certifications/certif4.png";
import certif5Png from "/certifications/certif5.png";
import certif1Avif from "/certifications/certif1.avif";
import certif2Avif from "/certifications/certif2.avif";
import certif3Avif from "/certifications/certif3.avif";
import certif4Avif from "/certifications/certif4.avif";
import certif5Avif from "/certifications/certif5.webp";

import profile01 from "/profile-photo1.jpg";

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/Alejandro-GR01",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alejandro-guzm%C3%A1n-rodr%C3%ADguez-3985b23b3",
  },
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
  "NodeJS",
  "Express",
  // "MongoDB",
  // "Mongoose",
];

export const highlightsAbout: HighlightAbout[] = [
  { icon: Code2 },
  { icon: Rocket },
  { icon: Users },
  { icon: Lightbulb },
];

export const projects: Project[] = [
  {
    imagePng: project01Png,
    imageAvif: project01Avif,
    tags: ["Vite", "React", "JavaScript", "ESLint", "Tailwind CSS", "GSAP"],
    link: "https://alejandro-gr01.github.io/beats-3-landing/",
    github: "https://github.com/Alejandro-GR01/beats-3-landing",
  },
  {
    imagePng: project02Png,
    imageAvif: project02Avif,
    tags: ["Vite", "React", "JavaScript", "ESLint", "Tailwind CSS", "GSAP"],
    link: "https://alejandro-gr01.github.io/gpt3-landing/",
    github: "https://github.com/Alejandro-GR01/gpt3-landing",
  },
  {
    imagePng: project03Png,
    imageAvif: project03Avif,
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
    imagePng: project04Png,
    imageAvif: project04Avif,
    tags: ["Vite", "React", "JavaScript", "Tailwind CSS", "GSAP", "ESLint"],
    link: "https://alejandro-gr01.github.io/hoobank-landing/",
    github: "https://github.com/Alejandro-GR01/hoobank-landing",
  },
];

export const experiences: Experience[] = [
  {
    company: "UXP Programming",
    technologies: ["Webflow", "JavaScript", "HTML", "CSS"],
    current: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    author: "Sara Chen",
    avatar: profile01,
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    value: "alejandrogr01dev@gmail.com",
    href: "mailto:alejandrogr01dev@gmail.com?subject=Laboral%20Oportunity%20Portfolio",
  },
  {
    icon: Phone,
    value: "+5356257921",
    href: "tel:+5356257921",
  },
  {
    icon: MapPin,
    value: "La Palma, Pinar del Rio, Cuba",
    href: "https://maps.app.goo.gl/psMBGjKjvd6euCc8A",
  },
];

export const certifications: Certification[] = [
  {
    school: "MoureDev | BigSchool",
    imagePng: certif5Png,
    imageAvif: certif5Avif,
    link: certif5Png,
    period: "3/26 - 3/26",
  },
  {
    school: "DevTalles",
    imagePng: certif4Png,
    imageAvif: certif4Avif,
    link: certif4Png,
    period: "10/25 - 11/25",
  },
  {
    school: "DevTalles",
    imagePng: certif3Png,
    imageAvif: certif3Avif,
    link: certif3Png,
    period: "8/2025 - 10/25",
  },
  {
    school: "TotalTypescript",
    imagePng: certif2Png,
    imageAvif: certif2Avif,
    link: certif2Png,
    period: "1/25 - 3/25",
  },
  {
    school: "TotalTypescript",
    imagePng: certif1Png,
    imageAvif: certif1Avif,
    link: certif1Png,
    period: "12/24 - 3/25",
  },
];
