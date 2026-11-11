import { Shield, Bot, Code2, Wrench } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const iconMap: Record<SkillGroup["icon"], typeof Shield> = {
  shield: Shield,
  bot: Bot,
  code: Code2,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 py-16 sm:py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="skills"
          eyebrow="02 — Skills"
          title="What I work with"
          description="A toolbox spanning defensive operations, offensive testing, automation and development."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="card-surface h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
