import { about, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-16 sm:py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="about"
          eyebrow="01 — About"
          title="Security engineering, grounded in practice"
        />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline">SOC</Badge>
              <Badge variant="outline">Threat Hunting</Badge>
              <Badge variant="outline">VAPT</Badge>
              <Badge variant="outline">AI Security</Badge>
              <Badge variant="outline">Digital Forensics</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid gap-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-surface flex items-baseline justify-between gap-4 p-5"
                >
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="font-mono text-2xl font-semibold text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Education</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((item, i) => (
              <Reveal
                key={item.qualification}
                delay={i * 0.06}
                className="card-surface flex h-full flex-col gap-2 p-5"
              >
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                <p className="text-sm font-semibold leading-snug">{item.qualification}</p>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="mt-auto pt-2 text-sm font-medium text-primary">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
