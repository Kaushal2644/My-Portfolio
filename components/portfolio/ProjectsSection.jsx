import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, MapPin, Users, X, AlertTriangle, Target, Image as ImageIcon, ShoppingCart, Home } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Employee Salary Prediction",
      shortDescription:
        "Built a machine learning model using Python to predict employee salaries based on various features like experience, education, and role.",
      fullDescription:
        "Developed a comprehensive machine learning solution to predict employee salaries with high accuracy. The system analyzes multiple factors including years of experience, educational background, job role, location, and industry sector. Implemented various regression algorithms and performed extensive feature engineering to optimize prediction accuracy.",
      technologies: [
        "Python",
        "Machine Learning",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/Kaushal2644/Employ-Salary-Prediction.git",
      category: "Machine Learning",
      challenges: [
        "Handling missing and inconsistent data across different sources",
        "Feature selection from 20+ potential variables",
        "Achieving model accuracy above 85% threshold",
        "Balancing model complexity with interpretability",
      ],
      achievements: [
        "Achieved 87% prediction accuracy on test dataset",
        "Reduced prediction error by 23% compared to baseline model",
        "Implemented cross-validation for robust performance",
        "Created interactive visualizations for insights",
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      ],
    },
    {
      title: "Airbnb Clone",
      shortDescription:
        "Developed a full-stack Airbnb clone using Node.js, Express, MongoDB, and EJS, enabling users to create, manage, and explore property listings with authentication and review features.",
      fullDescription:
        "Built a production-ready full-stack web application inspired by Airbnb that allows users to browse listings, create and manage their own properties, and interact through reviews and ratings. Implemented secure user authentication and authorization to protect routes and ensure only owners can modify their content. Designed the application using MVC architecture for scalability and maintainability. Integrated Cloudinary for image uploads and Mapbox for location-based features. The project demonstrates strong understanding of RESTful APIs, CRUD operations, database relationships, and real-world full stack development practices.",

      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Cloudinary",
        "Mapbox",
        "Passport.js",
        "Express-Session",
        "Git",
        "GitHub",
      ],
      icon: Home,
      gradient: "from-cyan-500 to-blue-500",
      githubUrl: "https://github.com/Kaushal2644/delta-project.git",
      liveUrl: "https://delta-project-tibz.onrender.com/listings",
      category: "Full Stack",
      challenges: [
        "Implementing secure authentication and authorization for protected routes",
        "Designing a scalable MVC architecture for better code organization",
        "Handling image uploads and storage using Cloudinary",
        "Managing relationships between listings, users, and reviews in MongoDB",
        "Ensuring proper error handling for async operations and edge cases",
      ],

      achievements: [
        "Developed a full-stack application with complete CRUD functionality",
        "Implemented secure user authentication and role-based authorization",
        "Integrated Cloudinary and Mapbox for enhanced user experience",
        "Built a scalable and maintainable backend using MVC architecture",
        "Successfully deployed the application on Render for public access",
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=400&fit=crop",
      ],
    },
    // {
    //   title: "Skill Swap Platform",
    //   shortDescription:
    //     "A MERN-based platform where users exchange skills, send requests, and manage interactive profiles.",
    //   fullDescription:
    //     "Developed a full-stack Skill Swap Platform using the MERN stack. Users can list skills they offer and want, browse others' profiles, send and accept swap requests, and manage their skill portfolio. The platform includes authentication using JWT, image uploads, admin moderation panel, and responsive UI built with React + Tailwind CSS. Deployed on Vercel and Render for smooth performance.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "JWT",
    //     "Tailwind CSS",
    //     "Multer",
    //     "Bcrypt",
    //     "Vercel",
    //     "Render",
    //   ],
    //   icon: Users,
    //   gradient: "from-blue-500 to-cyan-500",
    //   githubUrl: "https://github.com/Kaushal2644/Skill-Swap-Platform.git",
    //   liveUrl: "https://skill-swap-platform-gamma.vercel.app",
    //   category: "Full Stack",
    //   challenges: [
    //     "Implementing secure user authentication and authorization",
    //     "Managing complex skill matching algorithms",
    //     "Handling real-time request notifications",
    //     "Optimizing image upload and storage",
    //   ],
    //   achievements: [
    //     "Built end-to-end MERN stack application",
    //     "Implemented JWT-based authentication system",
    //     "Created admin moderation panel for quality control",
    //     "Deployed successfully on cloud platforms",
    //   ],
    //   screenshots: [
    //     "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    //   ],
    // },

    {
      title: "Artisan’s Corner",

      shortDescription:
        "Artisan’s Corner is a full-stack MERN e-commerce platform that empowers local artisans to showcase and sell handmade products online. The application provides a seamless buying experience for customers while offering sellers a dedicated dashboard to manage inventory, orders, and reviews. Built with modern cloud infrastructure, it simulates a real-world production-ready system.",

      fullDescription: `
                        Artisan’s Corner is a production-ready full-stack MERN e-commerce platform built to empower local artisans to sell handmade products online. The application provides secure user authentication and authorization using JWT, a dedicated seller dashboard for managing products and inventory, complete product CRUD operations, and a seamless shopping experience with cart and order management. Customers can explore products, leave reviews and ratings, and interact with a responsive and intuitive interface. The backend follows a RESTful API architecture and integrates MongoDB Atlas for cloud data storage and Cloudinary for optimized image uploads. Both the frontend and backend are fully deployed on Vercel to simulate a real-world cloud environment. A Razorpay payment gateway integration is planned and currently under progress to enable secure online transactions.
                      `,

      technologies: [
        "Frontend: React (Vite), Axios, Context API",
        "Backend: Node.js, Express.js",
        "Database: MongoDB Atlas",
        "Authentication: JWT",
        "Deployment: Vercel",
        "Media Storage: Cloudinary",
      ],
      icon: ShoppingCart,
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/Kaushal2644/Artisan-s.git",
      liveUrl: "https://artisan-s-corner.vercel.app/",
      category: "Full Stack",
      challenges: [
        "Handling CORS between separate frontend and backend deployments",
        "Configuring environment variables securely in production",
        "Managing MongoDB Atlas cloud connections on serverless architecture",
        "Implementing secure JWT authentication flows",
        "Optimizing image upload and storage using Cloudinary",
        "Debugging real-world deployment issues on Vercel",
      ],

      achievements: [
        "Built a complete end-to-end MERN stack application",
        "Designed scalable RESTful APIs",
        "Implemented JWT-based authentication & protected routes",
        "Successfully deployed frontend and backend on cloud infrastructure",
        "Created a production-ready architecture similar to real e-commerce platforms",
      ],

      screenshots: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      ],
    },
  ];

  const categories = ["All", "Machine Learning", "Full Stack"];

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
                    {project.liveUrl && (
                      <Button
                        asChild
                        variant="outline"
                        onClick={(e) => e.stopPropagation()}
                        className="border-2 border-green-500 dark:border-green-400 text-green-500 dark:text-green-400"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
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
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)} className="max-w-2xl">
        <DialogContent>
          {selectedProject && (
            <>
              {/* Sticky header: title left, close button right */}
              <div className="flex-shrink-0 flex items-center justify-between gap-3 px-5 py-3 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {selectedProject.title}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-5">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(selectedProject.icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 border-0">
                    {selectedProject.category}
                  </Badge>
                </div>

                {/* Screenshots */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Project Preview
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700">
                        <img
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    About This Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 text-xs font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Challenges Faced
                  </h3>
                  <ul className="space-y-1.5">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-1.5">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons - no Close button */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200 dark:border-slate-700">
                  {selectedProject.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 min-w-[120px] bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 text-white"
                    >
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    size="sm"
                    className={`flex-1 min-w-[120px] bg-gradient-to-r ${selectedProject.gradient} hover:opacity-90 text-white`}
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
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}