import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Icon } from "./ui";

// The whole card opens the case study; the Live/GitHub icons sit above that link.
export default function ProjectCard({ project: p, className = "" }) {
  return (
    <article className={`group relative flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <span className={`grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br ${p.gradient} text-white`}>
          <Icon name={p.icon} className="h-5 w-5" />
        </span>
        <span className="chip">{p.category}</span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
        <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-accent">
          {p.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{p.shortDescription}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {p.technologies.slice(0, 5).map((t) => <li key={t} className="chip">{t}</li>)}
        {p.technologies.length > 5 && <li className="chip">+{p.technologies.length - 5} more</li>}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
        <span className="relative z-10 flex gap-2">
          {p.liveUrl && (
            <a className="icon-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`}>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <a className="icon-link" href={p.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}>
            <Github className="h-4 w-4" />
          </a>
        </span>
      </div>
    </article>
  );
}
