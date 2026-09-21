import { siteConfig } from "@/data/site";

function Year() {
  return <span>{new Date().getFullYear()}</span>;
}

const links = [
  { label: "GitHub", href: siteConfig.githubUrl, external: true },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, external: true },
  { label: "Contact", href: "#contact", external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-navy-ink">
            <span className="text-navy-accent">~/</span>
            {siteConfig.name}
          </p>
          <p className="mono-label mt-1.5 text-[11px] text-navy-ink-3">
            {siteConfig.role}
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-5">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy-ink-2 transition-colors hover:text-navy-accent"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-navy-ink-2 transition-colors hover:text-navy-accent"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <p className="text-xs text-navy-ink-3 md:text-right">
          © <Year /> {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}