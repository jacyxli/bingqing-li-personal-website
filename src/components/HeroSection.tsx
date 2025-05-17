"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Hello, World!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background dark:from-gray-900 to-background/80 dark:to-gray-900/80 transition-colors duration-300">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold gradient-text"
        >
          {text}
          <span className="inline-block w-[0.1em] h-[1em] bg-gray-400 dark:bg-gray-500 ml-1 animate-[flash_2s_ease-in-out_infinite]"></span>
        </motion.h1>
      </div>
    </section>
  );
}
