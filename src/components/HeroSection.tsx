"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText =
    "I'm **Bingqing Li** (pronounced bin-chin), a 4th-year PhD candidate in Marketing at Virginia Tech. \n I study how emerging technologies shape consumer behaviors and marketing decisions. Using **machine learning**, **econometrics**, and **experiments**, I explore ways to better understand people in the digital world and create smarter tools for marketing research.";

  const renderText = (text: string) => {
    let result = [];
    let currentText = "";
    let isBold = false;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === "*" && text[i + 1] === "*") {
        if (currentText) {
          result.push(
            isBold ? <strong key={i}>{currentText}</strong> : currentText
          );
          currentText = "";
        }
        isBold = !isBold;
        i++; // Skip the next * character
      } else {
        currentText += text[i];
      }
    }

    if (currentText) {
      result.push(
        isBold ? <strong key="final">{currentText}</strong> : currentText
      );
    }

    return result;
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background dark:from-gray-900 to-background/80 dark:to-gray-900/80 transition-colors duration-300 overflow-hidden">
      {/* Interactive gradient circle */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-primary-dark/20 blur-3xl transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-start mt-10 md:mt-0 md:justify-end min-h-screen py-20 md:py-0">
          {/* Hi! text */}
          <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-1/2 flex justify-start md:justify-end mb-8 md:mb-0">
            <motion.h1
              initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-8xl font-sans font-bold text-primary pl-0 md:pr-40"
            >
              Hello!
            </motion.h1>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            {/* Animated text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl font-sans leading-relaxed relative"
            >
              {text.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={`gradient-text ${
                    index !== text.split("\n").length - 1 ? "mb-4" : ""
                  }`}
                >
                  {renderText(paragraph)}
                  {index === text.split("\n").length - 1 && (
                    <span className="inline-block w-[0.1em] h-[1em] bg-gray-400 dark:bg-gray-500 ml-1 animate-[flash_2s_ease-in-out_infinite]"></span>
                  )}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
