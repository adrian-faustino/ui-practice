import React from "react";
import classNames from "classnames";
// import { emptyFn } from "constants/global";
import Button from "components/common/Button";
import { IUseInput } from "types/global";

import "./Input.scss";

/* This component handles recieving user input of data related to input fields. State should not be managed here and insetead should be managed by the <useInput.ts> hook in this' parent component */

interface IInputProps {
  name: string;
  placeholder?: string;
  inputState: IUseInput;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  name,
  placeholder = "",
  inputState,
  className,
}) => {
  const _classNames = classNames("Input", className);

  return (
    <div className={_classNames}>
      <input
        name={name}
        placeholder={placeholder}
        value={inputState.values[name] || ""}
        onChange={inputState.onHandleChange}
      />

      <Button onClick={inputState.onHandleClearValues(name)}>x</Button>
    </div>
  );
};

export default Input;
