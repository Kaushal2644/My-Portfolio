import { Briefcase, Calendar } from "lucide-react";
import { internships } from "@/data/portfolio";
import { Section } from "./ui";

export default function InternshipsSection() {
  return (
    <Section
      id="internships"
      subtle
      title="Internship Experience"
      description="Practical experience gained through virtual internships with leading tech companies"
    >
      <ol className="ml-3 space-y-10 border-l border-line pl-8">
        {internships.map((it) => (
          <li key={`${it.company}-${it.role}`} className="relative">
            <span className="absolute -left-[calc(2rem+6.5px)] top-7 h-3 w-3 rounded-full border-2 border-accent bg-page" aria-hidden="true" />
            <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${it.color} text-white`}>
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{it.company}</h3>
                  <p className="font-medium text-accent">{it.role}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted"><Calendar className="h-4 w-4" aria-hidden="true" />{it.duration}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted">{it.description}</p>
              <h4 className="mt-6 text-sm font-semibold">Skills Acquired:</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {it.skills.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
