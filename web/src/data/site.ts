export const siteConfig = {
  name: "Hanbal Ahmad",
  role: "Full-Stack Developer | Python & AI/ML",
  headline: "I build practical digital products that solve real problems.",
  subheadline:
    "Full-Stack Developer focused on modern web applications, Python backends, and AI-powered solutions.",
  location: "Kamalia, Punjab, Pakistan",
  statusBadge: "Open to Remote Opportunities",
  /** Public contact email. Supply your own; leave empty to hide email links. */
  email: "",
  githubUsername: "hanbal07",
  githubUrl: "https://github.com/hanbal07",
  linkedinUrl: "https://linkedin.com/in/hanbal-ahmad/",
  /** Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;

export const profileStatements = {
  whoami: ["Full-Stack Developer", "Python Developer", "AI/ML Builder"],
} as const;