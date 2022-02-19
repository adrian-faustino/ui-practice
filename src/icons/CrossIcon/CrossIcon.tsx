import React from "react";
import { ISvgIconProps } from "types/global";

const CrossIcon: React.FC<ISvgIconProps> = ({
  width = "14",
  height = "15",
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
        d="M14 2.18373L12.59 0.773727L7 6.36373L1.41 0.773727L0 2.18373L5.59 7.77373L0 13.3637L1.41 14.7737L7 9.18373L12.59 14.7737L14 13.3637L8.41 7.77373L14 2.18373Z"
        fill="black"
      />
    </svg>
  );
};

export default CrossIcon;
