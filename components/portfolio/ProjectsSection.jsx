"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, MapPin, X, AlertTriangle, Target, Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Employee Salary Prediction",
      shortDescription: "Built a machine learning model using Python to predict employee salaries based on various features like experience, education, and role.",
      fullDescription: "Developed a comprehensive machine learning solution to predict employee salaries with high accuracy. The system analyzes multiple factors including years of experience, educational background, job role, location, and industry sector. Implemented various regression algorithms and performed extensive feature engineering to optimize prediction accuracy.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/Kaushal2644",
      category: "Machine Learning",
      challenges: [
        "Handling missing and inconsistent data across different sources",
        "Feature selection from 20+ potential variables",
        "Achieving model accuracy above 85% threshold",
        "Balancing model complexity with interpretability"
      ],
      achievements: [
        "Achieved 87% prediction accuracy on test dataset",
        "Reduced prediction error by 23% compared to baseline model",
        "Implemented cross-validation for robust performance",
        "Created interactive visualizations for insights"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
      ]
    },
    {
      title: "Geolocation-based Attendance Tracking",
      shortDescription: "Developed an IoT and MERN stack application that tracks student attendance using smartwatch geolocation data.",
      fullDescription: "Created an innovative attendance management system that leverages IoT smartwatch technology combined with geolocation services. The system automatically marks attendance when students enter designated classroom zones, eliminating manual roll calls. Features include real-time tracking, automated notifications, comprehensive admin dashboard, and detailed analytics for attendance patterns.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "IoT", "Geolocation API", "JWT", "Socket.io", "Material-UI"],
      icon: MapPin,
      gradient: "from-cyan-500 to-blue-500",
      githubUrl: "https://github.com/Kaushal2644",
      category: "Full Stack & IoT",
      challenges: [
        "Ensuring accurate geolocation within building boundaries",
        "Managing real-time data sync for multiple devices",
        "Battery optimization for continuous location tracking",
        "Handling network connectivity issues in smartwatches"
      ],
      achievements: [
        "Reduced attendance marking time by 95%",
        "99.2% accuracy in geofence detection",
        "Scaled to handle 500+ concurrent users",
        "Real-time WebSocket implementation for instant updates"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
      ]
    }
  ];

  const categories = ["All", "Machine Learning", "Full Stack & IoT"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions combining cutting-edge technologies to solve real-world problems
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`
                ${activeFilter === category 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600" 
                  : "border-2 border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-900/20"
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-blue-200 dark:hover:border-cyan-800 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                    >
                      View Details
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      onClick={(e) => e.stopPropagation()}
                      className="border-2 border-blue-500 dark:border-cyan-400 text-blue-500 dark:text-cyan-400"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <Button
            asChild
            variant="outline"
            className="border-2 border-blue-500 dark:border-cyan-400 text-blue-500 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-900/20"
          >
            <a
              href="https://github.com/Kaushal2644"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}>
                        {React.createElement(selectedProject.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                          {selectedProject.title}
                        </DialogTitle>
                        <Badge className="mt-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 border-0">
                          {selectedProject.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {/* Screenshots */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Project Preview
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border-2 border-gray-200 dark:border-slate-700">
                      <img
                        src={screenshot}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  About This Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Challenges Faced
                </h3>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                <Button
                  asChild
                  className={`flex-1 bg-gradient-to-r ${selectedProject.gradient} hover:opacity-90 text-white`}
                >
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-gray-300 dark:border-slate-700"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}