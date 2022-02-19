import React from "react";
import classNames from "classnames";
// import { emptyFn } from "constants/global"; todo
import Button from "components/common/Button";
import CrossIcon from "icons/CrossIcon";
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
        className="Input__field"
        name={name}
        placeholder={placeholder}
        value={inputState.values[name] || ""}
        onChange={inputState.onHandleChange}
      />

      <Button
        className="Input__clearButton"
        onClick={inputState.onHandleClearValues(name)}
      >
        <CrossIcon />
      </Button>
    </div>
  );
};

export default Input;
