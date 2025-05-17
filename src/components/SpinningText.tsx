"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const prompts = [
  "Make a song about the moon.",
  "Make a song about mom's cooking.",
  "Make a song for lunch.",
  "Make a song about summer.",
  "Make a song about coding.",
  "Make a song about the moon1.",
  "Make a song about mom's cooking2.",
  "Make a song for lunch3.",
  "Make a song about summer4.",
  "Make a song about coding5.",
];

export default function ScrollingPrompts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track the active prompt index based on scroll progress
  const [activeIndex, setActiveIndex] = useState(4);
  useEffect(() => {
    console.log(scrollYProgress);
    return scrollYProgress.on("change", (v) => {
      const idx = 4 + Math.round(v * (prompts.length - 4));
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  // Height for each prompt
  const promptHeight = 100;
  const containerHeight = prompts.length * promptHeight;

  // Animate About Me button
  const buttonOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.7, 1], [100, 0]);
  const buttonCenterY = useTransform(
    scrollYProgress,
    [0.7, 1],
    [0, (prompts.length * promptHeight) / 2]
  );

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        style={{
          width: "100vw",
          height: containerHeight,
          position: "relative",
        }}
      >
        {prompts.map((prompt, i) => {
          // Animate Y position: stack vertically, move up as you scroll
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [
              i * promptHeight,
              i * promptHeight - (prompts.length - 1) * promptHeight,
            ]
          );
          // Opacity and scale for focus
          const opacity = useTransform(
            scrollYProgress,
            [i / prompts.length, (i + 1) / prompts.length],
            [0.3, 1]
          );
          const scale = useTransform(
            scrollYProgress,
            [i / prompts.length, (i + 1) / prompts.length],
            [0.95, 1]
          );
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={prompt}
              style={{
                position: "absolute",
                y,
                opacity,
                scale,
                left: 0,
                zIndex: isActive ? 10 : 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              {isActive && (
                <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 mr-4" />
              )}
              <span
                className="text-[clamp(2.5rem,8vw,4.5rem)] font-serif font-medium select-none"
                style={{
                  color: isActive ? "#111" : "#888",
                  transition: "color 0.2s",
                }}
              >
                {prompt}
              </span>
            </motion.div>
          );
        })}
        {/* Animated About Me Button */}
        <motion.div
          style={{
            opacity: buttonOpacity,
            y: buttonY,
            position: "absolute",
            left: "50%",
            top: prompts.length * promptHeight + 40,
            transform: "translateX(-50%)",
            width: "auto",
            zIndex: 20,
          }}
        >
          <Link href="/about">
            <Button variant="primary" className="text-lg px-8 py-3">
              About Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
