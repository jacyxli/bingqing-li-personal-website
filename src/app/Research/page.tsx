"use client";

import ResearchSection from "@/components/ResearchPage";
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
      <ResearchSection />
    </main>
  );
}
