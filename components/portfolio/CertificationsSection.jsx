"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "DSA with Java",
      provider: "Apna College",
      category: "Programming",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Web Development",
      provider: "Apna College",
      category: "Full Stack",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Introduction to SQL",
      provider: "Tops Technology",
      category: "Database",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Android Developer Virtual Internship",
      provider: "Google for Developer",
      category: "Mobile Development",
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI/ML Virtual Internship",
      provider: "IBM",
      category: "Artificial Intelligence",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "React.js API Integration",
      provider: "Tops Technology",
      category: "Frontend Development",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through recognized certification programs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-blue-200 dark:hover:border-cyan-800"
            >
              {/* Gradient Top Border */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="w-7 h-7 text-white" />
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-3">
                  {cert.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Provider */}
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  {cert.provider}
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Certifications
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              4
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Institutions
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Virtual Internships
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Completion Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}