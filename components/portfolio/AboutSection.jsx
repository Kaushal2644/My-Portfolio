"use client";
import React from "react";
import { GraduationCap, Award, Code, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const coreSkills = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Artificial Intelligence",
    "Object-Oriented Programming",
    "Web Development"
  ];

  const highlights = [
    { icon: GraduationCap, label: "Education", value: "B.E. Computer Engineering" },
    { icon: Award, label: "CGPA", value: "9.17/10.0" },
    { icon: Code, label: "Projects", value: "2+ Major Projects" },
    { icon: Briefcase, label: "Internships", value: "2 Virtual Internships" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science & Engineering student at <span className="font-semibold text-blue-600 dark:text-cyan-400">Shri Sa'd Vidya Mandal Institute Of Technology, Bharuch</span>, 
              with a strong foundation in software development and emerging technologies.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to create impactful solutions. 
              From building <span className="font-semibold text-blue-600 dark:text-cyan-400">machine learning models</span> to developing 
              <span className="font-semibold text-blue-600 dark:text-cyan-400"> IoT-based applications</span>, I thrive on turning complex problems into elegant solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 text-sm font-medium border border-blue-200 dark:border-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-900/10 border-2 border-transparent hover:border-blue-200 dark:hover:border-cyan-800"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education Details */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-blue-950/30 border-2 border-blue-100 dark:border-blue-900">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Engineering in Computer Engineering
                </h3>
                <p className="text-lg text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                  Shri Sa'd Vidya Mandal Institute Of Technology, Bharuch
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <span className="font-semibold mr-2">Duration:</span>
                    2023 – 2027
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <span className="font-semibold mr-2">CGPA:</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-bold">9.17/10.0</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}