"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import Markdown from "@/components/common/Markdown";
import { useState } from "react";

// Import markdown content
import aiTechnologyContent from "@/content/research/ai-technology.md";
import digitalPlatformsContent from "@/content/research/digital-platforms.md";
import methodologyContent from "@/content/research/methodology.md";

export default function ResearchPage({ className }: { className?: string }) {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const researchTopics = [
    {
      title: "AI and Emerging Technology",
      description:
        "I investigate how human-technology interactions influence consumer behavior, focusing on technologies such as agentic AI, generative AI, and brain-computer interfaces. This work informs how emerging technologies disrupt, challenge, and enable new forms of marketing and value creation.",
      image: "/assets/images/ai_and_emerging_tech_cropped.png",
      content: aiTechnologyContent,
    },
    {
      title: "Digital Platforms and Online Marketing",
      description:
        "I analyze user-generated content (e.g., texts and images from online reviews and social media) to infer consumer preferences and behavioral patterns. I also examine consumer and firm responses to data privacy issues in digital environments, offering insights into platform governance and marketing strategy.",
      image: "/assets/images/digital_platform_and_online_marketing_cropped.png",
      content: digitalPlatformsContent,
    },
    {
      title: "Research Methodological Innovation",
      description:
        "I develop novel tools and methods that automate and scale traditional research techniques, such as conjoint analysis, meta-analysis, and psychometric coding. These innovations aim to enhance the efficiency and reproducibility of marketing research.",
      image: "/assets/images/research_method_innovation_cropped.png",
      content: methodologyContent,
    },
  ];

  return (
    <div className={className}>
      <div className="text-center mb-16">
        <Heading as="h2" size="2xl" className="mb-4 gradient-text">
          Research
        </Heading>
        <Paragraph
          size="lg"
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          My research combines <strong>machine learning</strong>,{" "}
          <strong>econometric modeling</strong>, and{" "}
          <strong>behavioral experiments</strong> to explore how technological
          innovations change consumer behaviors and marketing strategies.
        </Paragraph>
      </div>

      <div className="text-center mb-16">
        <Heading as="h2" size="xl" className="mb-4 gradient-text">
          Publications and Select Projects
        </Heading>
        <Paragraph
          size="lg"
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          My work specifically centers on three key topics
        </Paragraph>
        <div className="max-w-6xl mx-auto pt-8">
          <AnimatePresence mode="wait">
            {selectedTopic === null ? (
              // Grid view with circular images
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                {researchTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center cursor-pointer group relative"
                    onClick={() => setSelectedTopic(index)}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="card flex flex-col items-center h-full w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden">
                        <Image
                          src={topic.image}
                          alt={topic.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center"
                          loading="lazy"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-primary mix-blend-color transition-colors duration-300 group-hover:bg-transparent" />
                      </div>
                      <Heading
                        as="h4"
                        size="md"
                        className="text-center mb-4 group-hover:text-primary transition-colors"
                      >
                        {topic.title}
                      </Heading>
                      <Paragraph className="text-gray-600 dark:text-gray-400 text-center flex-grow">
                        {topic.description}
                      </Paragraph>
                      <div className="h-8 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Paragraph className="text-primary text-sm font-medium text-right font-trebuchet">
                          Read More →
                        </Paragraph>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Expanded view
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flat-card relative flex flex-col w-full dark:bg-gray-900/80 rounded-2xl p-8"
              >
                {/* Header with Dropdown/Collapse */}
                <div className="flex md:justify-end justify-between items-center mb-4 box-border w-full">
                  {/* Mobile Dropdown */}
                  <div className="relative mr-4 md:hidden flex-1 min-w-0">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full text-sm font-sans text-left px-4 py-2 rounded-full transition-colors flex items-center justify-between bg-primary/10 text-primary"
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={researchTopics[selectedTopic].image}
                            alt={researchTopics[selectedTopic].title}
                            fill
                            className="object-cover"
                            sizes="24px"
                          />
                        </div>
                        <span className="truncate flex-1">
                          {researchTopics[selectedTopic].title}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                          {researchTopics.map((topic, index) => (
                            <motion.button
                              key={index}
                              onClick={() => {
                                setSelectedTopic(index);
                                setIsOpen(false);
                              }}
                              className={`w-full text-sm font-sans text-left px-4 py-2 transition-colors flex items-center gap-2 ${
                                selectedTopic === index
                                  ? "bg-primary/10 text-primary font-bold"
                                  : "hover:bg-primary/10 hover:text-primary"
                              }`}
                            >
                              <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src={topic.image}
                                  alt={topic.title}
                                  fill
                                  className="object-cover"
                                  sizes="24px"
                                />
                              </div>
                              <span className="truncate flex-1">
                                {topic.title}
                              </span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Collapse button - Shared */}
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="p-2 group rounded-full hover:text-primary flex-shrink-0 flex items-center justify-center gap-2 relative"
                  >
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:bg-primary/10 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 rotate-180 group-hover:rotate-0 transition-transform duration-300 origin-center"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="flex flex-row">
                  {/* Desktop Sidebar */}
                  <motion.div
                    className="hidden md:block w-1/3 pr-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="space-y-2">
                      {researchTopics.map((topic, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedTopic(index)}
                          className={`w-full text-sm font-sans text-left px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
                            selectedTopic === index
                              ? "bg-primary/10 text-primary font-bold"
                              : "hover:bg-primary/10 hover:text-primary"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={topic.image}
                              alt={topic.title}
                              fill
                              className="object-cover"
                              sizes="24px"
                            />
                          </div>
                          <span className="truncate">{topic.title}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Content area */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:w-2/3"
                    onClick={() => setSelectedTopic(null)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedTopic}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Markdown
                          content={researchTopics[selectedTopic].content}
                          className="text-left"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
