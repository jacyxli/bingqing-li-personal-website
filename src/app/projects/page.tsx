"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management and secure payment processing.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/placeholder-1.jpg",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "An interactive dashboard that leverages machine learning to provide insights and predictions from complex datasets.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/placeholder-2.jpg",
  },
  {
    title: "Mobile Health App",
    description:
      "A cross-platform mobile application for tracking health metrics and providing personalized wellness recommendations.",
    tags: ["React Native", "Node.js", "MongoDB", "AWS"],
    image: "/placeholder-3.jpg",
  },
  {
    title: "Real-time Collaboration Tool",
    description:
      "A web-based collaboration platform with real-time editing, chat, and project management features.",
    tags: ["Vue.js", "WebSocket", "Redis", "Docker"],
    image: "/placeholder-4.jpg",
  },
  {
    title: "Smart Home Automation",
    description:
      "An IoT platform for controlling and monitoring smart home devices with voice commands and automation rules.",
    tags: ["Python", "MQTT", "React", "Raspberry Pi"],
    image: "/placeholder-5.jpg",
  },
  {
    title: "Content Management System",
    description:
      "A flexible CMS with a modern interface, custom plugins, and advanced content scheduling capabilities.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    image: "/placeholder-6.jpg",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work, showcasing various technologies and
            solutions I've built to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
