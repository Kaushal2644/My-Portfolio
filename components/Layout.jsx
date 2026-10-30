"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// Highlights the nav link of the section currently in view (home page only).
function useActiveSection(enabled) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    if (!enabled) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [enabled]);
  return active;
}

export default function Layout({ children }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const sectionInView = useActiveSection(onHome);
  const active = onHome ? sectionInView : pathname.startsWith("/projects") ? "projects" : "";

  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) {}
  };

  const ThemeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-link"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only rounded-lg bg-accent px-4 py-2 text-accent-fg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]">
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
          scrolled || open ? "border-line bg-page/85 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/#home" className="font-display text-lg font-semibold tracking-tight" aria-label={`${profile.name} — home`}>
            {profile.initials}
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-fg ${
                  active === item.id ? "text-fg underline decoration-accent decoration-2 underline-offset-8" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <span className="ml-3">{ThemeButton}</span>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            {ThemeButton}
            <button
              type="button"
              className="icon-link"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="wrap grid gap-1 pb-4 md:hidden" aria-label="Mobile">
            {navItems.map((item) => (
              <Link key={item.id} href={`/#${item.id}`} className={`rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-subtle ${active === item.id ? "text-accent" : "text-muted"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="border-t border-line py-10">
        <div className="wrap flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name}. Built with passion using React</p>
            <p className="mt-1 text-xs text-muted/80">Designed &amp; Developed by {profile.name}</p>
          </div>
          <div className="flex gap-2">
            <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
