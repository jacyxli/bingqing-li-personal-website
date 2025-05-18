import React from "react";
import Link from "next/link";
import ShareIcon from "../icons/ShareIcon";

interface ShareButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  url: string;
  color?: "primary" | "secondary" | "gray";
  size?: number;
  children?: React.ReactNode;
}

export default function ShareButton({
  text,
  url,
  color = "primary",
  size = 20,
  className = "",
  children,
  ...props
}: ShareButtonProps) {
  const colorClasses = {
    primary: "hover:text-primary",
    secondary: "hover:text-secondary",
    gray: "hover:text-gray-600",
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link transition-colors ${colorClasses[color]} ${className}`}
      {...props}
    >
      {text || children}
      <ShareIcon
        size={size}
        className="inline ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-[0.125rem]"
      />
    </Link>
  );
}
