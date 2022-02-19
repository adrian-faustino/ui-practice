import React from "react";
import classNames from "classnames";
import Button from "components/common/Button";
import CrossIcon from "icons/CrossIcon";
import { IUseInput, IInputChangeEvent, IInputKeyDownEvent } from "types/global";
// import { emptyFn } from "constants/global";

import "./Input.scss";

/* This component handles recieving user input of data related to input fields. State should not be managed here and insetead should be managed by the <useInput.ts> hook in this' parent component */

interface IInputProps {
  isAutoCompleteOff?: boolean;
  name: string;
  placeholder?: string;
  maxLength?: number;
  inputState: IUseInput;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  isAutoCompleteOff = false,
  name,
  placeholder = "",
  maxLength,
  inputState,
  className,
}) => {
  const _classNames = classNames("Input", className);

  // returns function to update state if maxLength requirements are met
  const onChange = (e: IInputChangeEvent) => {
    if (maxLength && inputState.values[name]?.length >= maxLength) {
      return;
    }

    inputState.onHandleChange(e);
  };

  const onKeyDown = (e: IInputKeyDownEvent) => {
    // handling delete here fixes issue where once input length has reached maxLength, early return prevents further state change (in onChange fn)
    if (e.key === "Backspace") {
      e.preventDefault(); // stops propagation to onChange handler

      inputState.setValues((state = {}) => ({
        ...state,
        [name]: state[name]?.slice(0, -1),
      }));
    }
  };

  return (
    <div className={_classNames}>
      <input
        autoComplete={isAutoCompleteOff ? "off" : undefined}
        className="Input__field"
        name={name}
        placeholder={placeholder}
        value={inputState.values[name] || ""}
        onKeyDown={onKeyDown}
        onChange={onChange}
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
