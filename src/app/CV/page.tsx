"use client";
import { motion } from "framer-motion";
import Divider from "@/components/common/Divider";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              I'm a software engineer with a passion for building innovative
              solutions that make a difference. With over 5 years of experience
              in full-stack development, I've worked on various projects ranging
              from enterprise applications to consumer-facing products.
            </p>
            <p className="mb-4">
              My journey in technology began with a degree in Computer Science,
              where I developed a strong foundation in software engineering
              principles and best practices. Since then, I've been continuously
              learning and adapting to new technologies and methodologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentoring.
            </p>
          </div>
        </motion.div>

        <Divider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Divider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Senior Software Engineer
                </h3>
                <p className="text-primary mb-2">
                  Company {item} • 2020 - Present
                </p>
                <p className="text-gray-600">
                  Led the development of key features and improvements for
                  enterprise applications. Collaborated with cross-functional
                  teams to deliver high-quality solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <Divider />
      </div>
    </main>
  );
}
