"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function InternshipsSection() {
  const internships = [
    {
      company: "IBM",
      role: "AI/ML Virtual Intern",
      duration: "2025",
      description: "Built an employee salary prediction model using machine learning algorithms. Gained hands-on experience with data preprocessing, model training, and evaluation techniques.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Model Training"],
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop",
      color: "from-blue-600 to-blue-700"
    },
    {
      company: "Google for Developer",
      role: "Android Developer Virtual Intern",
      duration: "2025",
      description: "Learned Android app development fundamentals including UI/UX design, activity lifecycle, and integration with backend services. Built practical Android applications.",
      skills: ["Android Studio", "Java", "Kotlin", "Material Design", "REST APIs"],
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Internship</span> Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practical experience gained through virtual internships with leading tech companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-blue-200 dark:hover:border-cyan-800"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${internship.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-xl">
                    <img
                      src={internship.logo}
                      alt={internship.company}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Company and Role */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {internship.company}
                  </h3>
                  <div className="flex items-center justify-center text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {internship.role}
                  </div>
                  <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {internship.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {internship.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 text-xs font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}