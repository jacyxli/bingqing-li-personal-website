"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Divider from "./Divider";
import ShareButton from "./ShareButton";

interface MarkdownProps {
  content: string;
  className?: string;
}

export default function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold mb-2" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h3 className="text-lg font-bold mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-base font-sans" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="text-highlight" {...props} />
          ),
          a: ({ node, children, ...props }) => (
            <ShareButton
              url={props.href || ""}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </ShareButton>
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-6 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-6 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          hr: () => <Divider />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
