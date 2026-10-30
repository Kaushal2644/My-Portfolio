import { Award, CheckCircle } from "lucide-react";
import { certifications, internships } from "@/data/portfolio";
import { Section } from "./ui";

export default function CertificationsSection() {
  // Counts are calculated from the lists, so they update when you add items.
  const institutions = new Set(certifications.map((c) => c.provider)).size;
  const stats = [
    { value: `${certifications.length}`, label: "Certifications" },
    { value: `${institutions}`, label: "Institutions" },
    { value: `${internships.length}`, label: "Virtual Internships" },
    { value: "100%", label: "Completion Rate" },
  ];

  return (
    <Section
      id="certifications"
      title="Certifications & Achievements"
      description="Continuous learning and professional development through recognized certification programs"
    >
      <dl className="grid grid-cols-2 gap-6 border-b border-line pb-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="font-display text-3xl font-semibold">{s.value}</dd>
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.title} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${c.color} text-white`}>
              <Award className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium text-muted">{c.category}</p>
              <h3 className="mt-0.5 font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                <CheckCircle className="h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />{c.provider}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
