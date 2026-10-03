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
    <footer className="border-t border-line bg-canvas py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-xs text-ink-3">
            Full-Stack Developer · Python · AI/ML
          </p>
          {siteConfig.contactEmail ? (
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-1 block text-xs text-ink-2 transition-colors hover:text-accent-ink"
            >
              {siteConfig.contactEmail}
            </a>
          ) : null}
        </div>

        <nav aria-label="Footer" className="flex items-center gap-5">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-2 transition-colors hover:text-accent-ink"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink-2 transition-colors hover:text-accent-ink"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <p className="text-xs text-ink-3 md:text-right">
          © <Year /> {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
