"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function FeaturedSection() {
  return (
    <Section className="py-24">
      <div className="text-center mb-16">
        <Heading as="h2" size="2xl" className="mb-4 gradient-text">
          Featured Work
        </Heading>
        <Paragraph className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card group"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20" />
            <div className="p-6">
              <Heading
                as="h3"
                size="lg"
                className="mb-2 group-hover:text-primary transition-colors"
              >
                Project {i}
              </Heading>
              <Paragraph className="text-gray-600 dark:text-gray-400">
                A brief description of the project and the technologies used.
              </Paragraph>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
