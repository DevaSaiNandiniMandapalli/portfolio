import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-24 py-16 sm:py-20 md:py-24"
    >
      <div className="container">
        <SectionHeading
          id="certifications"
          eyebrow="06 — Certifications"
          title="Credentials"
          description="Formal training and certifications across security platforms and development."
        />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={cert.name} delay={(i % 3) * 0.04}>
              <div className="card-surface flex h-full items-start gap-3 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium leading-snug">{cert.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
