"use client";
import { useEffect, useState } from "react";
import Divider from "@/components/common/Divider";
import DownloadIcon from "@/components/icons/DownloadIcon";
import Paragraph from "@/components/common/Paragraph";
import Heading from "@/components/common/Heading";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import matter from "gray-matter";
import cv from "@/content/cv.md";
import ShareButton from "@/components/common/ShareButton";
import Section from "@/components/common/Section";

export default function CV() {
  const [sectionsData, setSectionsData] = useState<{ [key: string]: any }>({});

  const sections: {
    name: string;
    key: string;
    listTyple: "double" | "single" | "nested-single" | "nested-double";
  }[] = [
    { name: "Education", key: "education", listTyple: "double" },
    { name: "Research Domains", key: "research_domains", listTyple: "single" },
    { name: "Publications", key: "publications", listTyple: "single" },
    { name: "Working Papers", key: "working_papers", listTyple: "single" },
    {
      name: "Works in Progress",
      key: "works_in_progress",
      listTyple: "single",
    },
    {
      name: "Conference Presentations",
      key: "conference_presentations",
      listTyple: "single",
    },
    {
      name: "Teaching Experience",
      key: "teaching_experience",
      listTyple: "double",
    },
    {
      name: "Industrial Experience",
      key: "industrial_experience",
      listTyple: "double",
    },
    { name: "Honors & Awards", key: "honors_awards", listTyple: "double" },
    {
      name: "Skills & Languages",
      key: "skills_languages",
      listTyple: "single",
    },
    {
      name: "Relevant Coursework",
      key: "relevant_coursework",
      listTyple: "nested-double",
    },
  ];

  useEffect(() => {
    const { data } = matter(cv);
    setSectionsData(data);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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

        {sections.map(({ key, name, listTyple }, index) => (
          <Section key={key} className="mb-4 p-0 md:p-0">
            <Heading
              as="h2"
              size="2xl"
              animation="vertical"
              className="mb-4 text-gray-900"
            >
              {name}
            </Heading>
            <List items={sectionsData[key]} type={listTyple} />
            {index !== sections.length - 1 && <Divider />}
          </Section>
        ))}
      </div>
    </main>
  );
}

function List({
  items,
  type,
}: {
  items: any[];
  type: "single" | "double" | "nested-single" | "nested-double";
}) {
  if (items) {
    if (type === "single") {
      return (
        <ul className="space-y-2 text-base md:text-lg">
          {items.map((item, idx) => (
            <li key={idx}>
              <Markdown content={item}></Markdown>
            </li>
          ))}
        </ul>
      );
    } else if (type === "double") {
      return (
        <ul className="space-y-2 text-sm md:text-base">
          {items.map((item, idx) => (
            <li key={idx}>
              <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
                <div className="w-full md:w-/3 md:flex-1 text-left">
                  {item?.left?.map((text: string, index: number) => (
                    <Markdown key={index} content={text} />
                  ))}
                </div>
                <div className="w-full md:w-auto text-left md:text-right text-secondary md:text-inherit pl-2 md:pl-0">
                  {item?.right?.map((text: string, index: number) => (
                    <Markdown key={index} content={text} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return items.map((list, idx) => (
        <div key={idx} className="mb-4">
          <Heading as="h4" size="md" animation="none" className="mb-4">
            {list.category}
          </Heading>
          <List
            items={list.items}
            type={type === "nested-single" ? "single" : "double"}
          />
        </div>
      ));
    }
  }
}

function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h4: ({ node, children, ...props }) => (
          <div className="typography-emphasis" {...props}>
            {children}
          </div>
        ),
        p: ({ node, children, ...props }) => <div {...props}>{children}</div>,
        a: ({ node, children, ...props }) => (
          <ShareButton
            url={props.href || ""}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </ShareButton>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
