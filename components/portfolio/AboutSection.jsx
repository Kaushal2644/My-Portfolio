import { GraduationCap, Award, Code, Briefcase } from "lucide-react";
import { about, projects, internships } from "@/data/portfolio";
import { Section, Rich } from "./ui";

export default function AboutSection() {
  const { education } = about;
  // Projects & internships counts now come from your data, so they never go stale.
  const facts = [
    { icon: GraduationCap, label: "Education", value: "B.E. Computer Engineering" },
    { icon: Award, label: "CGPA", value: education.cgpa },
    { icon: Code, label: "Projects", value: `${projects.length} Major Projects` },
    { icon: Briefcase, label: "Internships", value: `${internships.length} Virtual Internships` },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => <p key={i}><Rich text={p} /></p>)}
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
        {facts.map(({ icon: Ico, label, value }) => (
          <div key={label} className="bg-surface p-5">
            <dt className="flex items-center gap-2 text-sm text-muted"><Ico className="h-4 w-4" aria-hidden="true" />{label}</dt>
            <dd className="mt-2 font-display text-lg font-semibold leading-snug">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12">
        <h3 className="font-display text-xl font-semibold">Core Competencies</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {about.coreSkills.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>
      </div>

      <div className="mt-12 flex gap-5 rounded-xl border border-line bg-surface p-6 sm:p-8">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent text-accent-fg"><GraduationCap className="h-6 w-6" aria-hidden="true" /></div>
        <div>
          <h3 className="font-display text-xl font-semibold">{education.degree}</h3>
          <p className="mt-1 font-medium text-accent">{education.institute}</p>
          <p className="mt-3 text-sm text-muted">
            <span className="font-semibold text-fg">Duration:</span> {education.duration}
            <span className="mx-3" aria-hidden="true">|</span>
            <span className="font-semibold text-fg">CGPA:</span> {education.cgpa}
          </p>
        </div>
      </div>
    </Section>
  );
}
