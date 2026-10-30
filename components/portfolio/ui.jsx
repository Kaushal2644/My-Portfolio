import {
  Code2, Layout, Wrench, Heart, Brain, Home, Users, ShoppingCart,
  GraduationCap, Award, Code, Briefcase, Folder,
} from "lucide-react";

const icons = { Code2, Layout, Wrench, Heart, Brain, Home, Users, ShoppingCart, GraduationCap, Award, Code, Briefcase };

// Data files store icon names as strings (so they can cross the server/client boundary).
export function Icon({ name, ...props }) {
  const Cmp = icons[name] || Folder;
  return <Cmp aria-hidden="true" {...props} />;
}

// "**bold**" → emphasised text
export function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <strong key={i} className="font-semibold text-fg">{part}</strong> : <span key={i}>{part}</span>
  );
}

// Every home-page section uses this: sticky title on the left, content on the right.
export function Section({ id, title, description, subtle = false, children }) {
  return (
    <section id={id} className={`border-t border-line py-20 sm:py-28 ${subtle ? "bg-subtle" : ""}`}>
      <div className="wrap grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {description && <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{description}</p>}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
