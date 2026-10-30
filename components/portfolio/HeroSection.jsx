import Link from "next/link";
import { Download, Mail, MapPin, GraduationCap, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const delay = (ms) => ({ "--d": `${ms}ms` });

export default function HeroSection() {
  const { focus } = profile;
  const [first, last] = [profile.name.split(" ")[0], profile.name.split(" ").slice(1).join(" ")];

  return (
    <section id="home" className="flex min-h-[100svh] items-center pb-16 pt-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="rise text-base font-medium text-accent" style={delay(0)}>{profile.badge}</p>

          <h1 className="rise mt-5 font-display font-semibold leading-[0.98] tracking-tight" style={delay(100)}>
            <span className="block text-2xl font-medium text-muted sm:text-3xl">Hi, I&apos;m</span>
            <span className="mt-2 block text-6xl sm:text-8xl">{first}</span>
            <span className="block text-6xl sm:text-8xl">{last}</span>
          </h1>

          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted" style={delay(200)}>
            {profile.introLead}{" "}
            {focus.map((f, i) => (
              <span key={f}>
                {i === focus.length - 1 ? "and " : ""}
                <strong className="font-semibold text-fg">{f}</strong>
                {i < focus.length - 1 ? (focus.length > 2 || i === 0 ? ", " : " ") : ""}
              </span>
            ))}
          </p>

          <ul className="rise mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" style={delay(260)}>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" />{profile.location}</li>
            <li className="flex items-center gap-2"><GraduationCap className="h-4 w-4" aria-hidden="true" />CGPA {profile.cgpa}</li>
          </ul>

          <div className="rise mt-9 flex flex-wrap gap-3" style={delay(320)}>
            <a href={profile.resume} download={profile.resumeName} className="btn btn-primary">
              <Download className="h-4 w-4" aria-hidden="true" /> Download resume
            </a>
            <Link href="/projects" className="btn btn-ghost">View projects</Link>
            <a href="#contact" className="btn btn-ghost"><Mail className="h-4 w-4" aria-hidden="true" /> Get in touch</a>
          </div>

          <div className="rise mt-8 flex gap-2" style={delay(380)}>
            <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github className="h-4 w-4" /></a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin className="h-4 w-4" /></a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Send email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Arch-shaped portrait with an offset outline */}
        <div className="rise flex justify-center lg:justify-end" style={delay(240)}>
          <div className="relative h-64 w-64 sm:h-72 sm:w-72">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-full border border-accent/60" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              fetchPriority="high"
              className="relative h-full w-full rounded-full bg-subtle object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
