import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="section-eyebrow mb-3" aria-hidden="true">
        {eyebrow}
      </p>
      <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
