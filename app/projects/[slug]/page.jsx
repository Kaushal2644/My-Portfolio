import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, AlertTriangle, Check } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Icon } from "@/components/portfolio/ui";

// Builds one static page per project at deploy time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Next.js 16: `params` is a Promise.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.shortDescription.slice(0, 155) };
}

function Block({ title, icon, children }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">{icon}{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pb-24 pt-28">
      <div className="wrap">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${p.gradient} text-white`}>
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            <span className="chip">{p.category}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> View Live Site
              </a>
            )}
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github className="h-4 w-4" aria-hidden="true" /> View on GitHub
            </a>
          </div>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="space-y-10">
            <Block title="About This Project">
              <p className="max-w-3xl leading-relaxed text-muted">{p.fullDescription}</p>
            </Block>

            <Block title="Challenges Faced" icon={<AlertTriangle className="h-5 w-5 text-orange-500" aria-hidden="true" />}>
              <ul className="space-y-3">
                {p.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />{c}</li>
                ))}
              </ul>
            </Block>

            <Block title="Key Achievements" icon={<Check className="h-5 w-5 text-green-500" aria-hidden="true" />}>
              <ul className="space-y-3">
                {p.achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" aria-hidden="true" />{a}</li>
                ))}
              </ul>
            </Block>

            {p.screenshots?.length > 0 && (
              <Block title="Project Preview">
                <div className="grid gap-4 sm:grid-cols-2">
                  {p.screenshots.map((src, i) => (
                    <img key={src} src={src} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" width={800} height={400} className="aspect-[2/1] w-full rounded-lg border border-line object-cover" />
                  ))}
                </div>
              </Block>
            )}
          </div>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <section>
              <h2 className="font-display text-lg font-semibold">Technologies Used</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
            </section>

            {p.team && (
              <section>
                <h2 className="font-display text-lg font-semibold">Team: {p.team.name}</h2>
                <p className="mt-1 text-sm text-muted">{p.team.competition}</p>
                <p className="text-sm text-muted">{p.team.institution}</p>
                <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-surface">
                  {p.team.members.map((m) => (
                    <li key={m.name} className="p-3.5">
                      <p className="text-sm font-semibold">{m.name}</p>
                      <p className="text-sm text-muted">{m.role}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>

        <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <Link href={`/projects/${prev.slug}`} className="rounded-xl border border-line p-5 transition-colors hover:border-accent">
            <span className="flex items-center gap-2 text-sm text-muted"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Previous project</span>
            <span className="mt-1 block font-display font-semibold">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="rounded-xl border border-line p-5 text-right transition-colors hover:border-accent">
            <span className="flex items-center justify-end gap-2 text-sm text-muted">Next project<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            <span className="mt-1 block font-display font-semibold">{next.title}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
