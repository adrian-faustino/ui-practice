import React, { useState } from "react";
import classNames from "classnames";
// import { emptyFn } from "constants/global";
import Button from "components/common/Button";
import { IUseInput } from "types/global";

import "./Input.scss";

interface IInputProps {
  name: string;
  inputState: IUseInput;
  className?: string;
}

const Input: React.FC<IInputProps> = ({ name, inputState, className }) => {
  const _classNames = classNames("Input", className);

  return (
    <div className={_classNames}>
      <input
        name={name}
        value={inputState.values[name] || ""}
        onChange={inputState.onHandleChange}
      />

      <Button onClick={inputState.onHandleClear(name)}>x</Button>
    </div>
  );
};

export default Input;
