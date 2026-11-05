import type { SVGProps } from "react";

/** Interlocking rings, drawn to match Lucide's 24px grid and 2px stroke. */
export function RingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="8.5" cy="14" r="6" />
      <circle cx="15.5" cy="14" r="6" />
      <path d="m14 4 1.5-1.5L17 4l-1.5 1.5z" />
    </svg>
  );
}
