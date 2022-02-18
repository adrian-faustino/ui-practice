import React from "react";
import { emptyFn } from "constants/global";
import "./Button.scss";

interface IButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Button: React.FC<IButtonProps> = ({ onClick = emptyFn, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
