import React from 'react';

const projects = [
  {
    title: "Fitness Tracking",
    description: "A comprehensive fitness tracking application with workout plans and progress monitoring",
    url: "https://fitness-beta-eight.vercel.app/",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800"
  },
  {
    title: "Online Learning Platform",
    description: "E-learning platform with interactive courses and student management",
    url: "https://onlinelearning-sooty.vercel.app/",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800"
  },
  {
    title: "Habit Tracker",
    description: "Track and maintain daily habits with progress visualization",
    url: "https://habittracker-one-nu.vercel.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800"
  },
  {
    title: "Inventory Management",
    description: "Complete inventory tracking and management system",
    url: "https://inventory-kappa-beryl.vercel.app/",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800"
  },
  {
    title: "Team Collaboration",
    description: "Platform for team communication and project management",
    url: "https://teamcollaboration.vercel.app/",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
  },
  {
    title: "Freelance Management",
    description: "System for managing freelance projects and clients",
    url: "https://freelance-two-chi.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
  },
  {
    title: "Quiz Application",
    description: "Interactive quiz platform with multiple categories",
    url: "https://quiz-bice-five.vercel.app/",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
  },
  {
    title: "Education Management",
    description: "Complete education management system with multi-user roles",
    url: "https://education-management-psi.vercel.app/login",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800"
  },
  {
    title: "Expense Tracker",
    description: "Personal finance and expense tracking application",
    url: "https://expense-tracker-lyart-three.vercel.app/",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800"
  },
  {
    title: "E-Library",
    description: "Digital library management system",
    url: "https://elib-gilt.vercel.app/",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800"
  },
  {
    title: "Event Management",
    description: "Platform for organizing and managing events",
    url: "https://eventmanagement-one.vercel.app/",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800"
  },
  {
    title: "Recipe App",
    description: "Collection of recipes with cooking instructions",
    url: "https://recipe-two-pi.vercel.app/",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800"
  },
  {
    title: "Personal Blog",
    description: "Blog platform with content management",
    url: "https://personalblog-roan.vercel.app/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
  },
  {
    title: "Task Management",
    description: "Task organization and tracking system",
    url: "https://taskmanegement-chi.vercel.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800"
  },
  {
    title: "Netflix Clone",
    description: "A replica of Netflix's streaming platform",
    url: "https://github.com/devang115/netflixclone",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800"
  },
  {
    title: "Airbnb Clone",
    description: "A replica of Airbnb's booking platform",
    url: "https://github.com/devang115/airbnb",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800"
  },
  {
    title: "Bootstrap jQuery Project",
    description: "Web application built with Bootstrap and jQuery",
    url: "https://github.com/devang115/bootstap-jquery",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}