import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug">
          {project.title}
          {project.abbreviation && (
            <span className="ml-2 font-mono text-xs text-primary">({project.abbreviation})</span>
          )}
        </h3>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Badge variant="subtle">{tag}</Badge>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-2">
        {project.live && (
          <Button asChild size="sm" variant="outline">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" />
              Live
            </a>
          </Button>
        )}
        {project.github && (
          <Button asChild size="sm" variant="ghost">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github aria-hidden="true" />
              GitHub
            </a>
          </Button>
        )}
        {!project.live && !project.github && project.context && (
          <span className="font-mono text-xs text-muted-foreground">{project.context}</span>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 py-16 sm:py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="projects"
          eyebrow="04 — Projects"
          title="Things I've built"
          description="Security tooling, AI-powered platforms and shipped client work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
