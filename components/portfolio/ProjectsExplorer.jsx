"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectsExplorer({ projects }) {
  // Categories come from your data, so a new category appears automatically.
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], [projects]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.title} ${p.technologies.join(" ")}`.toLowerCase().includes(q))
    );
  }, [projects, category, query]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative block sm:w-64">
          <span className="sr-only">Search projects or technologies</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or tech" className="field pl-9" />
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">Showing {list.length} of {projects.length} projects</p>

      {list.length ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      ) : (
        <p className="mt-10 rounded-xl border border-dashed border-line p-10 text-center text-muted">
          No projects match that search. Clear the filter or try a different technology.
        </p>
      )}
    </>
  );
}
