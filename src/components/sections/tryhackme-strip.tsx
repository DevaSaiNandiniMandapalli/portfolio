import { ArrowUpRight, Target } from "lucide-react";
import { tryhackme } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function TryHackMeStrip() {
  return (
    <section aria-label="TryHackMe profile" className="pb-8">
      <div className="container">
        <Reveal>
          <a
            href={tryhackme.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-lg border border-primary/25 bg-gradient-to-r from-primary/10 via-card/40 to-transparent p-6 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {tryhackme.label}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{tryhackme.message}</h3>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{tryhackme.detail}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              View profile
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
