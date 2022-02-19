import React from "react";
import { ISvgIconProps } from "types/global";

const DwellingIcon: React.FC<ISvgIconProps> = ({
  width = "26",
  height = "24",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.766602 11.2082V23.4562C0.766602 23.7565 1.01007 24 1.31041 24H25.4561C25.7565 24 26 23.7565 26 23.4562V11.5083C26 11.3052 25.9431 11.1061 25.8358 10.9336L19.3392 0.492874L13.5523 9.87484C13.0154 10.7372 12.0714 11.2082 11.0555 11.2082H0.766602Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3392 0.492874L13.5523 9.87477C13.0153 10.7372 12.0714 11.2067 11.0555 11.2067H0.766815L5.28692 3.48302C5.44645 3.21043 5.7166 3.02064 6.02714 2.96301L19.3392 0.492874Z"
        fill="black"
      />
    </svg>
  );
};

export default DwellingIcon;
