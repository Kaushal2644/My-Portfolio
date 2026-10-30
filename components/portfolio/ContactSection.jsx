"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { profile, emailConfig } from "@/data/portfolio";
import { Section } from "./ui";

const empty = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status !== "loading" && status !== "idle") setStatus("idle");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .send(emailConfig.serviceId, emailConfig.templateId, { ...form }, emailConfig.publicKey)
      .then(() => { setStatus("success"); setForm(empty); })
      .catch(() => setStatus("error"));
  };

  const info = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <Section id="contact" subtle title="Contact Me" description="Have a question or a project in mind? Send a message and I’ll get back to you.">
      <div className="grid gap-10 xl:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-6">
          {info.map(({ icon: Ico, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent"><Ico className="h-5 w-5" aria-hidden="true" /></span>
              <div className="min-w-0">
                <p className="text-sm text-muted">{label}</p>
                {href ? <a href={href} className="break-all font-medium hover:text-accent">{value}</a> : <p className="font-medium">{value}</p>}
              </div>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-line bg-surface p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="John Doe" className="field" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="john@example.com" className="field" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
            <input id="subject" name="subject" value={form.subject} onChange={onChange} required placeholder="Project Collaboration" className="field" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} required placeholder="Your message here..." className="field resize-y" />
          </div>

          <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full py-3.5 disabled:opacity-60">
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : status === "success" ? <CheckCircle className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>

          <div aria-live="polite" className="min-h-5 text-sm">
            {status === "success" && <p className="flex items-center gap-2 text-green-600 dark:text-green-400"><CheckCircle className="h-4 w-4" />Thanks. I’ll reply to your email soon.</p>}
            {status === "error" && (
              <p className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />The message didn’t send. Check your connection and try again, or email {profile.email}.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
