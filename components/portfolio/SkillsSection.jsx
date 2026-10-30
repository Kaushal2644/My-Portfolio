import { skillCategories } from "@/data/portfolio";
import { Section, Icon } from "./ui";

// Your numeric levels are kept in the data file; the page shows them as a 5-step scale + word.
const label = (n) => (n >= 85 ? "Advanced" : n >= 75 ? "Proficient" : "Working knowledge");

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      subtle
      title="Technical Skills"
      description="A comprehensive set of technical skills acquired through academic learning, personal projects, and hands-on experience"
    >
      <div className="space-y-12">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3">
              <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${cat.color} text-white`}>
                <Icon name={cat.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
            </div>

            <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
              {cat.skills.map((s) => {
                const filled = Math.round(s.level / 20);
                return (
                  <li key={s.name} className="flex items-center justify-between gap-4 border-b border-line py-3">
                    <span className="font-medium">{s.name}</span>
                    <span className="flex items-center gap-3" title={`${s.level}%`}>
                      <span className="hidden text-xs text-muted sm:inline">{label(s.level)}</span>
                      <span className="flex gap-1" role="img" aria-label={`${s.name}: ${label(s.level)}`}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span key={n} className={`h-1.5 w-5 rounded-full ${n <= filled ? "bg-accent" : "bg-line"}`} />
                        ))}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
