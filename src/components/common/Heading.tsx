"use client";

import { Component, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  className?: string;
  children: React.ReactNode;
  animation?: "horizontal" | "vertical";
}

const sizeClasses = {
  sm: "md:text-lg text-base",
  md: "md:text-xl text-lg",
  lg: "md:text-2xl text-xl",
  xl: "md:text-3xl text-2xl",
  "2xl": "md:text-4xl text-3xl",
  "3xl": "md:text-5xl text-4xl",
  "4xl": "md:text-6xl text-5xl",
  "5xl": "md:text-7xl text-6xl",
  "6xl": "md:text-8xl text-7xl",
};

export default function Heading({
  as: Component = "h2",
  size = "md",
  className,
  children,
  animation = "vertical",
  ...props
}: HeadingProps) {
  return (
    <motion.div
      initial={
        animation === "vertical"
          ? { opacity: 0, y: 20 }
          : { opacity: 0, x: -40 }
      }
      whileInView={
        animation === "vertical" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Component
        className={cn("font-bold text-gray-900", sizeClasses[size], className)}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
