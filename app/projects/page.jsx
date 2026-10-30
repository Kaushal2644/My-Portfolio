import { projects } from "@/data/portfolio";
import ProjectsExplorer from "@/components/portfolio/ProjectsExplorer";

export const metadata = {
  title: "Projects",
  description: "All projects by Kaushal Patel: full-stack web apps, AI integrations and machine learning.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-32">
      <div className="wrap">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">All projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Innovative solutions combining cutting-edge technologies to solve real-world problems
        </p>
        <div className="mt-10">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </div>
  );
}
