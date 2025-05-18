"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Divider from "@/components/common/Divider";
import ShareButton from "@/components/common/ShareButton";
import DownloadIcon from "@/components/icons/DownloadIcon";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";

export default function CV() {
  const skills = [
    {
      category: "Programming & Software",
      items: [
        "R",
        "Python",
        "Matlab",
        "Stata",
        "Sawtooth",
        "Java",
        "Mathematica",
      ],
    },
    {
      category: "Languages",
      items: [
        "Chinese (native)",
        "English (fluent)",
        "Japanese (proficient JLPT-N1)",
        "German (basic)",
      ],
    },
  ];

  const coursework = [
    {
      category: "Marketing",
      items: [
        {
          left: "Advanced Quantitative Research Methods in Business",
          right: (
            <>
              Shane Wang, <em>Virginia Tech</em>
            </>
          ),
        },
        {
          left: "Marketing Management and Strategy",
          right: (
            <>
              Dipankar Chakravarti, <em>Virginia Tech</em>
            </>
          ),
        },
        {
          left: "Judgment and Decision-Making in Marketing",
          right: (
            <>
              Rajesh Bagchi, <em>Virginia Tech</em>
            </>
          ),
        },
        {
          left: "Seminar in Buyer Behavior Research",
          right: (
            <>
              Frank May, <em>Virginia Tech</em>
            </>
          ),
        },
        {
          left: "Experimental Design",
          right: (
            <>
              Matt Thomson, <em>Western</em>
            </>
          ),
        },
        {
          left: "Research Methods",
          right: (
            <>
              Matt Thomson, <em>Western</em>
            </>
          ),
        },
        {
          left: "Theories of Marketing",
          right: (
            <>
              Kersi Antia, <em>Western</em>
            </>
          ),
        },
        {
          left: "Multivariate Analysis",
          right: (
            <>
              Lauren Cipriano, <em>Western</em>
            </>
          ),
        },
      ],
    },
    {
      category: "Economics",
      items: [
        {
          left: "Econometrics II",
          right: (
            <>
              Roy Allen, <em>Western</em>
            </>
          ),
        },
        {
          left: "Advanced Methods in Applied Economics",
          right: (
            <>
              David Rivers, <em>Western</em>
            </>
          ),
        },
      ],
    },
    {
      category: "Computer Science",
      items: [
        {
          left: "Advanced Machine Learning",
          right: (
            <>
              Ming Jin, <em>Virginia Tech</em>
            </>
          ),
        },
        {
          left: "Interacting with Data",
          right: (
            <>
              Barbara Engelhardt, <em>Princeton</em>
            </>
          ),
        },
        {
          left: "Information Retrieval",
          right: (
            <>
              Andrea LaPaugh, <em>Princeton</em>
            </>
          ),
        },
        {
          left: "Information Security",
          right: (
            <>
              Prateek Mittal, <em>Princeton</em>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <Paragraph className="flex space-x-1 justify-start md:justify-end mb-4 md:mb-8 text-sm md:text-base">
          <a
            href="/BingqingLi_CV_May2025.pdf"
            download
            className="group font-sans text-secondary hover:underline hover:text-primary transition-all duration-200"
          >
            <span className="transition-all duration-200 tracking-normal group-hover:tracking-widest inline-flex items-center">
              Download CV in PDF
              <DownloadIcon size={16} className="ml-2 align-middle" />
            </span>
          </a>
        </Paragraph>
        {/* Education */}
        <Section title="Education">
          <List
            items={[
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">
                      Pamplin College of Business
                    </div>
                    <div className="typography-normal">
                      Ph.D. Candidate, Marketing
                    </div>
                    <div className="typography-normal">
                      Committee: Shane Wang (Chair), Dipankar Chakravarti,
                      Rajesh Bagchi, Matthew Thomson
                    </div>
                  </>
                }
                right={<div className="typography-normal">2023-2026</div>}
              />,
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">
                      Ivey Business School at Western University
                    </div>
                    <div className="typography-normal">
                      Ph.D. Study, Marketing (Transferred with advisor Dr. Shane
                      Wang)
                    </div>
                  </>
                }
                right={<div className="typography-normal">2021-2022</div>}
              />,
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">
                      Princeton University
                    </div>
                    <div className="typography-normal">
                      M.S., Electrical Engineering
                    </div>
                  </>
                }
                right={<div className="typography-normal">2014-2016</div>}
              />,
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">Bryn Mawr College</div>
                    <div className="typography-normal">
                      B.A. <em>summa cum laude</em>, Physics and Chemistry
                    </div>
                  </>
                }
                right={<div className="typography-normal">2010-2014</div>}
              />,
            ]}
          />
        </Section>

        {/* Research Domains */}
        <Section title="Research Domains">
          <div className="typography-normal">
            <strong>Methodological:</strong> Machine Learning, Multimodal Data,
            Econometrics, Experiments
          </div>
          <div className="typography-normal">
            <strong>Substantive:</strong> Agentic AI, Digital Marketing,
            Emerging Technology, Data Privacy, Online Platforms
          </div>
        </Section>

        {/* Publications */}
        <Section title="Publications">
          <List
            items={[
              <span key="1">
                <strong>Li, Bingqing</strong>, Edward Yuhang Lai, and Xin
                (Shane) Wang, "From Tools to Agents: Meta-Analytic Insights into
                Human Acceptance of Agentic AI." Conditionally accepted at{" "}
                <em>Journal of Marketing</em>.
              </span>,
              <span key="2">
                Li, Xi, <strong>Bingqing Li</strong>, and Zhilin Yang (2025),
                <ShareButton
                  url="http://doi.org/10.25300/MISQ/2024/18829"
                  color="primary"
                  size={18}
                  className="ml-1 align-middle"
                >
                  "The Dark Side of Voluntary Data Sharing."{" "}
                  <em>MIS Quarterly</em>, 49(1), 155–178.
                </ShareButton>
              </span>,
              <span key="3">
                He, Jiaxiu, <strong>Bingqing Li</strong>, and Xin (Shane) Wang
                (2023),
                <ShareButton
                  url="http://doi.org/10.1016/j.ijresmar.2023.04.001"
                  color="primary"
                  size={18}
                  className="ml-1 align-middle"
                >
                  "Image Features and Demand in the Sharing Economy: A Study of
                  Airbnb."{" "}
                  <em>International Journal of Research in Marketing</em>,
                  40(4), 760–780.
                </ShareButton>
              </span>,
            ]}
          />
        </Section>

        {/* Working Papers */}
        <Section title="Working Papers">
          <List
            items={[
              <span key="1">
                <strong>Li, Bingqing</strong>, Dipankar Chakravarti, and Xin
                (Shane) Wang, "Brain-Computer Interfaces Enabled Marketing."
                Revising for <em>Journal of Marketing</em>.
              </span>,
              <span key="2">
                <strong>Li, Bingqing</strong>, Qiuhong (Owen) Wei, and Xin
                (Shane) Wang, "Predicting Consumer Behaviors with LLM-Powered
                Digital Twins." In preparation for submission to{" "}
                <em>Marketing Science</em>. (Expected submission date: May 2025)
              </span>,
              <span key="3">
                Moore, Alexander K., <strong>Li, Bingqing</strong>, Matthew
                Thomson, and Xin (Shane) Wang, "Beyond Human Coders: LLM-Based
                Synthetic Psychometric Coders for Large Scale Content Databases
                in Consumer Behavior Research." In preparation for submission to{" "}
                <em>Journal of Consumer Research</em>. (Expected submission
                date: June 2025)
              </span>,
            ]}
          />
        </Section>

        {/* Works in Progress */}
        <Section title="Works in Progress">
          <List
            items={[
              '"The Use of Causal Conjoint in Meta-Analysis"',
              '"Embedded Attribute Conjoint Analysis" With Shane Wang and Sherry Wang',
            ]}
          />
        </Section>

        {/* Conference Presentations */}
        <Section title="Selected Conference Proceedings & Presentations">
          <List
            items={[
              <span key="1">
                <strong>Li, Bingqing</strong>, Edward Yuhang Lai, and Xin
                (Shane) Wang, "When Causal Conjoint Meets Meta-Analysis."{" "}
                <em>2024 AMA Winter Academic Conference</em>, FL.
              </span>,
              <span key="2">
                <strong>Li, Bingqing</strong>, Raji Ghawi, and Jürgen Pfeffer
                (2022),{" "}
                <ShareButton url="https://dl.acm.org/doi/10.1145/3487664.3487711">
                  "What We Talk about When We Talk about Earth on Earth Day?"{" "}
                  <em>
                    in Proceedings of ACM 23rd International Conference on
                    Information Integration and Web Intelligence
                  </em>
                </ShareButton>
              </span>,
            ]}
          />
        </Section>

        {/* Teaching Experience */}
        <Section title="Teaching Experience">
          <List
            items={[
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">Instructor</div>
                    <div className="typography-normal">
                      Advertising (MKTG 3504)
                    </div>
                  </>
                }
                right={
                  <>
                    <div className="typography-normal">Fall 2024</div>
                    <div className="typography-normal">
                      <em>Marketing Department, Virginia Tech</em>
                    </div>
                  </>
                }
              />,
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">
                      Teaching Assistant
                    </div>
                    <div className="typography-normal">
                      Interacting with Data (COS 424)
                    </div>
                  </>
                }
                right={
                  <>
                    <div className="typography-normal">Spring 2016</div>
                    <div className="typography-normal">
                      <em>Computer Science Department, Princeton University</em>
                    </div>
                  </>
                }
              />,
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">Preceptor</div>
                    <div className="typography-normal">
                      Introduction to Computer Science (COS 126)
                    </div>
                  </>
                }
                right={
                  <>
                    <div className="typography-normal">Fall 2015</div>
                    <div className="typography-normal">
                      <em>Computer Science Department, Princeton University</em>
                    </div>
                  </>
                }
              />,
            ]}
          />
        </Section>

        {/* Industrial Experience */}
        <Section title="Industrial Experience">
          <List
            items={[
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">
                      Digital Marketing and Management Trainee
                    </div>
                    <div className="typography-normal">
                      Infineon Technologies
                    </div>
                  </>
                }
                right={
                  <>
                    <div className="typography-normal">2017 – 2021</div>
                    <div className="typography-normal">
                      <em>Munich, Germany & Shanghai, China</em>
                    </div>
                  </>
                }
              />,
              <ListItem
                left={
                  <>
                    <div className="typography-emphasis">
                      Quantitative Market Analyst and Founding Member
                    </div>
                    <div className="typography-normal">
                      Buyfund Internet Technology
                    </div>
                  </>
                }
                right={
                  <>
                    <div className="typography-normal">2016 – 2017</div>
                    <div className="typography-normal">
                      <em>Shanghai, China</em>
                    </div>
                  </>
                }
              />,
            ]}
          />
        </Section>

        {/* Honors & Awards */}
        <Section title="Honors & Awards">
          <List
            items={[
              <ListItem
                left="Sheth Doctoral Consortium Fellow"
                right="American Marketing Association 2025"
              />,
              <ListItem
                left="ISMS Doctoral Consortium Fellow"
                right="INFORMS Society for Marketing Science 2025"
              />,
              <ListItem
                left="PhD Research Development Grant ($3,000) "
                right="Virginia Tech, 2024"
              />,
              <ListItem
                left="Marketing Strategy Consortium Fellow"
                right="University of Georgia 2023"
              />,
              <ListItem
                left="Brock Scholarship ($37,000)"
                right="Western University 2022"
              />,
              <ListItem
                left="Germany Scholarship (Deutschlandstipendium) ($3,700) "
                right="Technische Universität München 2021"
              />,
              <ListItem
                left="SPOT Award for Extraordinary Employee ($1,000)"
                right="Infineon Technologies 2019"
              />,
              <ListItem
                left="Gordon Wu Fellowship in Engineering ($85,390)"
                right="Princeton University 2014"
              />,
              <ListItem
                left="Elizabeth S. Shippen Scholarship in Science ($1,200)"
                right="Bryn Mawr College 2013"
              />,
              <ListItem
                left="Undergraduate Outstanding Presentation Award"
                right="American Physical Society 2013"
              />,
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Skills & Languages">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Heading
                  as="h4"
                  size="lg"
                  animation="horizontal"
                  className="mb-4 text-gray-900"
                >
                  {group.category}
                </Heading>
                {/* Mobile: comma-separated line */}
                <div className="block md:hidden text-gray-700 dark:text-gray-200">
                  {group.items.join(", ")}
                </div>
                {/* Desktop: vertical list */}
                <div className="hidden md:block">
                  <List items={group.items} />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Coursework */}
        <Section title="Relevant Coursework" showDivider={false}>
          <div className="space-y-8">
            {coursework.map((group, index) => (
              <div key={group.category}>
                <Heading
                  as="h4"
                  size="lg"
                  animation="horizontal"
                  className="mb-2 text-gray-900"
                >
                  {group.category}
                </Heading>
                <List
                  items={group.items.map((item, idx) => (
                    <ListItem
                      key={idx}
                      left={
                        <div className="typography-normal">{item.left}</div>
                      }
                      right={
                        <div className="typography-normal">{item.right}</div>
                      }
                    />
                  ))}
                />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

// Helper Components
function Section({
  showDivider = true,
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group w-auto">
        <Heading
          as="h2"
          size="2xl"
          animation="horizontal"
          className="mb-4 text-gray-900"
        >
          {title}
        </Heading>
      </div>
      {children}
      {showDivider && <Divider />}
    </motion.section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="typography-normal">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ListItem({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
      <div className="w-full md:flex-1 text-left">{left}</div>
      <div className="w-full md:w-1/4 text-left md:text-right text-secondary md:text-inherit pl-2 md:pl-0">
        {right}
      </div>
    </div>
  );
}
