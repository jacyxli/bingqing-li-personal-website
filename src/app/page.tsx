"use client";

import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { useRef } from "react";
import ResearchPage from "@/components/ResearchPage";
import Section from "@/components/common/Section";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <motion.main ref={containerRef} className="transition-colors duration-300">
      <HeroSection />
      <Section className="py-24">
        <ResearchPage className="px-0" />
      </Section>
    </motion.main>
  );
}
