import React from "react";

interface OrcidIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "width" | "height"> {
  color?: string;
  fill?: string;
  size?: number;
}

export default function OrcidIcon({
  color = "#333333",
  fill = "white",
  size = 24,
  ...props
}: OrcidIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill={color} />
      <g fill={fill}>
        <path d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z" />
        <path d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z" />
        <path d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1C84.2,46.7,88.7,51.3,88.7,56.8z" />
      </g>
    </svg>
  );
}
