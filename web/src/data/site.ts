export const siteConfig = {
  name: "Hanbal Ahmad",
  role: "Full-Stack Developer | Python & AI/ML",
  headline: "I build practical digital products that solve real problems.",
  subheadline:
    "Full-Stack Developer focused on modern web applications, Python backends, and AI-powered solutions.",
  location: "Pakistan \u00b7 Open to Remote",
  statusBadge: "Open to Remote",
  /**
   * Public contact email used by the "Email me directly" block
   * (mailto link + copy button). Supply your own address here;
   * keep empty to hide email-based contact options.
   */
  contactEmail: "",
  /**
   * Path to the profile photo shown in the hero.
   * Drop a real photograph at web/public/profile/hanbal-ahmad.webp
   * (webp, ~4:5 portrait). A monogram tile is shown as a graceful
   * fallback while the file is absent, so the hero never breaks.
   */
  profileImage: "/profile/hanbal-ahmad.webp",
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