import { Github, Linkedin, Mail, Target } from "lucide-react";
import { socials, type SocialLink } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialLink["id"], typeof Mail> = {
  linkedin: Linkedin,
  github: Github,
  tryhackme: Target,
  email: Mail,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  variant?: "default" | "nav";
}

export function SocialLinks({ className, iconClassName, variant = "default" }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((link) => {
        const Icon = iconMap[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={link.id === "email" ? undefined : "_blank"}
              rel={link.id === "email" ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              title={link.label}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/60 hover:text-primary focus-visible:text-primary",
                variant === "nav" && "h-9 w-9",
                iconClassName
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
