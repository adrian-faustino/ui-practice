import React from "react";
import Button from "components/common/Button";
import Input, { useInput, IUseInput } from "components/common/Input";
import { INPUT_NAMES } from "./constants";

import "./BalanceChecker.scss";

const BalanceChecker = () => {
  const inputState: IUseInput = useInput();
  const { values = {} } = inputState;

  const onHandleValidation = () => {
    console.log("@@@@ Validating:", values[INPUT_NAMES.ccNumber]);
  };

  return (
    <div className="BalanceChecker">
      <h3>Balance Checker</h3>

      <p>Enter your card number to check it's balance.</p>

      <Input name={INPUT_NAMES.ccNumber} inputState={inputState} />

      {/* Error message */}
      <p>Your balance is XXX</p>
      <p>Invalid number</p>

      <div>
        <Button onClick={onHandleValidation}>Check</Button>
      </div>
    </div>
  );
};

export default BalanceChecker;
