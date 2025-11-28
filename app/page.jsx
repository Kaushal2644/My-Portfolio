"use client";
import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import InternshipsSection from "../components/portfolio/InternshipsSection";
import CertificationsSection from "../components/portfolio/CertificationsSection";
import ContactSection from "../components/portfolio/ContactSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <InternshipsSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Kaushal Patel. Built with passion using React & Base44
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Developed by Kaushal Patel
          </p>
        </div>
      </footer>
    </div>
  );
}