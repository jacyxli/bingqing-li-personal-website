import React from "react";

interface DownloadIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "width" | "height"> {
  color?: string;
  size?: number;
}

export default function DownloadIcon({
  color = "currentColor",
  size = 24,
  ...props
}: DownloadIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 327.03 323.82"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <g transform="translate(10, 10) scale(0.92)">
        <path
          d="M287.03,211.91v61.91c0,5.52-4.48,10-10,10H50c-5.52,0-10-4.48-10-10v-61.91c0-5.52-4.48-10-10-10H10c-5.52,0-10,4.48-10,10v91.91c0,11.05,8.95,20,20,20h287.03c11.05,0,20-8.95,20-20v-91.91c0-5.52-4.48-10-10-10h-20c-5.52,0-10,4.48-10,10Z"
          fill={color}
        />
        <path
          d="M224.95,140.36l-38.02,38.02c-1.26,1.26-3.41.37-3.41-1.41V10c0-5.52-4.48-10-10-10h-20c-5.52,0-10,4.48-10,10v166.97c0,1.78-2.15,2.67-3.41,1.41l-38.02-38.02c-3.91-3.91-10.24-3.91-14.14,0l-11.17,11.17c-3.91,3.91-3.91,10.24,0,14.14l72.61,72.61c7.81,7.81,20.47,7.81,28.28,0l72.61-72.61c3.91-3.91,3.91-10.24,0-14.14l-11.17-11.17c-3.91-3.91-10.24-3.91-14.14,0Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
