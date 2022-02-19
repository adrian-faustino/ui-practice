import React from "react";
import { emptyFn } from "constants/global";
import classNames from "classnames";

import "./Button.scss";

interface IButtonProps {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Button: React.FC<IButtonProps> = ({
  className,
  onClick = emptyFn,
  children,
}) => {
  const _classNames = classNames("Button", className);

  return (
    <button className={_classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
