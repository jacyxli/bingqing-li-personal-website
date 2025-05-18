import React from "react";

interface EmailIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "width" | "height"> {
  color?: string;
  fill?: string;
  size?: number;
}

export default function EmailIcon({
  color = "#333333",
  fill = "white",
  size = 24,
  ...props
}: EmailIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <circle cx="32" cy="32" r="32" fill={color} />
      <path
        d="M44 24H20C18.9 24 18 24.9 18 26V38C18 39.1 18.9 40 20 40H44C45.1 40 46 39.1 46 38V26C46 24.9 45.1 24 44 24ZM44 28L32 34L20 28V26L32 32L44 26V28Z"
        fill={fill}
      />
    </svg>
  );
}
