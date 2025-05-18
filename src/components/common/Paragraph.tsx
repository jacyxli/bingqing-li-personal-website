"use client";

import { HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParagraphProps extends Omit<HTMLMotionProps<"p">, "children"> {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export default function Paragraph({
  size = "md",
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-gray-600", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </motion.p>
  );
}
