import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import { Section } from "./ui";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="Innovative solutions combining cutting-edge technologies to solve real-world problems"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((p, i) => (
          // An odd last card spans the full row so the grid never looks unfinished.
          <ProjectCard key={p.slug} project={p} className={i === featured.length - 1 && featured.length % 2 ? "sm:col-span-2" : ""} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link href="/projects" className="btn btn-primary">
          View all {projects.length} projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <Github className="h-4 w-4" aria-hidden="true" /> Visit My GitHub
        </a>
      </div>
    </Section>
  );
}
