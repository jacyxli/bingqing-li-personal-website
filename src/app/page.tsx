"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { useEffect, useRef } from "react";
import ResearchPage from "@/components/ResearchPage";
import Section from "@/components/common/Section";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const darkThemeProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const updateDarkMode = () => {
      const progress = darkThemeProgress.get();
      document.documentElement.style.setProperty(
        "--dark-mode-progress",
        progress.toString()
      );
    };

    const unsubscribe = (darkThemeProgress as MotionValue<number>).on(
      "change",
      updateDarkMode
    );
    updateDarkMode();

    return () => unsubscribe();
  }, [darkThemeProgress]);

  return (
    <motion.main ref={containerRef} className="transition-colors duration-300">
      <style jsx global>{`
        @keyframes flash {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        :root {
          --transition-duration: 300ms;
          --dark-mode-progress: 0;
        }

        body {
          transition: background-color var(--transition-duration) ease-in-out,
            color var(--transition-duration) ease-in-out;
        }

        .card {
          transition: background-color var(--transition-duration) ease-in-out,
            border-color var(--transition-duration) ease-in-out;
        }

        .gradient-text {
          transition: filter var(--transition-duration) ease-in-out;
        }
      `}</style>

      <HeroSection />
      <Section className="py-24">
        <ResearchPage />
      </Section>
    </motion.main>
  );
}
