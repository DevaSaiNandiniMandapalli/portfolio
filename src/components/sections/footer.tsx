import { navItems, profile, siteMeta } from "@/data/portfolio";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-mono text-sm font-semibold">
              <span className="text-primary">~/</span>devasainandini
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{profile.headline}</p>
            <SocialLinks className="mt-4" variant="nav" />
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-muted-foreground transition-colors hover:text-primary"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {siteMeta.footerYear} {profile.name}
          </p>
          <a
            href="#hero"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
