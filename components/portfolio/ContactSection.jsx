"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
// import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "kaushalpatel2506@gmail.com",
        subject: `Portfolio Contact: ${formData.subject}`,
        body: `
New message from ${formData.name} (${formData.email}):

${formData.message}
        `
      });

      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setSending(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kaushalpatel2506@gmail.com",
      href: "mailto:kaushalpatel2506@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7574845894",
      href: "tel:+917574845894",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bharuch, Gujarat, India",
      href: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-blue-200 dark:hover:border-cyan-800"
                >
                  <a
                    href={info.href}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </div>
                      <div className="text-gray-900 dark:text-white font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-white dark:bg-slate-900 border-2 border-blue-100 dark:border-blue-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-cyan-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={sending || sent}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 text-base"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}