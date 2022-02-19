import React from "react";
import { emptyFn } from "constants/global";
import classNames from "classnames";

import "./Button.scss";

interface IButtonProps {
  isFullWidth?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Button: React.FC<IButtonProps> = ({
  isFullWidth = false,
  className,
  onClick = emptyFn,
  children,
}) => {
  const _classNames = classNames("Button", className, {
    "Button--isFullWidth": isFullWidth,
  });

  return (
    <button className={_classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
