"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    const a = document.createElement('a');
    a.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69120d07bb540407282c5eb5/Kaushal_Patel_Resume.pdf';
    a.download = 'Kaushal_Patel_Resume.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Computer Science & Engineering Student
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Kaushal Patel
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Passionate about building innovative solutions with <span className="font-semibold text-blue-600 dark:text-cyan-400">MERN Stack</span>, 
                <span className="font-semibold text-blue-600 dark:text-cyan-400"> Machine Learning</span>, and 
                <span className="font-semibold text-blue-600 dark:text-cyan-400"> IoT</span>
              </p>

              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bharuch, Gujarat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>•</span>
                  <span>CGPA: 8.78</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-6 text-base"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-6 text-base border-2 border-blue-500 dark:border-cyan-400 text-blue-500 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-900/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://github.com/Kaushal2644"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kaushal-patel-5a0543323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kaushalpatel2506@gmail.com"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-2xl animate-pulse delay-75"></div>
              
              {/* Profile Photo Container */}
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69120d07bb540407282c5eb5/4fc1e6cb9_Kaushal.jpg"
                    alt="Kaushal Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 dark:border-cyan-500/30 animate-ping"></div>
                
                {/* Floating Badge */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}