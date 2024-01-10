import React from "react";
type PropsType = {
  className?: string;
};
const TriangleDownIcon = ({ className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className || "h-2 w-2 rotate-180"}
    >
      <path
        fillRule="evenodd"
        d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
      />
    </svg>
  );
};

export default TriangleDownIcon;