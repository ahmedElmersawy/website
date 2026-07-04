export const site = {
  name: "Ahmed Elmersawy",
  degree: "M.S., Electrical and Computer Engineering",
  university: "Purdue University",
  tagline:
    "I build AI systems that learn to optimize software across competing goals (speed, memory, and energy) and study the fundamental training dynamics that determine when those systems can learn at all.",
  shortBio:
    "I'm an undergraduate researcher in Purdue's Duality Lab, advised by Prof. James Davis. I'm interested in research opportunities at the intersection of machine learning, systems, and software optimization. The fastest way to reach me is email.",
  email: "aelmersa@purdue.edu",
  social: {
    github: "https://github.com/ahmedElmersawy",
    linkedin: "https://www.linkedin.com/in/ahmed-elmersawy/",
  },
  location: "West Lafayette, Indiana",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Awards", href: "/awards" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;
