"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Layout, Terminal, Wrench } from "lucide-react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "SQL", level: 80 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Layout,
      title: "Frameworks",
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "NextJS", level: 80 },
        { name: "NodeJS", level: 80 },
        { name: "ExpressJS", level: 75 },
        { name: "MongoDB", level: 75 }
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 90 },
        { name: "Android Studio", level: 70 },
        { name: "IntelliJ", level: 75 }
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through academic learning, personal projects, and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-blue-200 dark:hover:border-cyan-800"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${categoryIndex * 0.2}s both` : 'none'
                }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      style={{
                        animation: isVisible ? `fadeInRight 0.5s ease-out ${(categoryIndex * 0.2) + (skillIndex * 0.1)}s both` : 'none'
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}