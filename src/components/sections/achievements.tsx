import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="scroll-mt-24 py-16 sm:py-20 md:py-24"
    >
      <div className="container">
        <SectionHeading
          id="achievements"
          eyebrow="05 — Achievements"
          title="Recognition & milestones"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.05}>
              <div className="card-surface flex h-full gap-4 p-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Trophy className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                  {item.detail && (
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
