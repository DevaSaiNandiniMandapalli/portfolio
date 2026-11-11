import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24 py-16 sm:py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="experience"
          eyebrow="03 — Experience"
          title="Where I've worked"
          description="Entrepreneurship, SOC operations, offensive security, blockchain research, training and client delivery."
        />

        <ol className="relative ml-3 border-l border-border sm:ml-4">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.organization}`} delay={i * 0.04} className="relative pb-10 pl-8 last:pb-0">
              <span
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="text-muted-foreground">· {job.organization}</span>
                </h3>
                {job.dates && !job.dates.trim().startsWith("[") && (
                  <span className="font-mono text-xs text-primary">{job.dates}</span>
                )}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>
              {job.link && (
                <a
                  href={job.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {job.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
