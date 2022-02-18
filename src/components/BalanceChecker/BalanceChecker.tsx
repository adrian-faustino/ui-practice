import React from "react";
import Button from "components/common/Button";
import Input, { IUseInput } from "components/common/Input";
import { INPUT_NAMES } from "./constants";

import "./BalanceChecker.scss";

/* This is a purely presentational component. All state, services, and handlers should be managed by the parent container */

interface IBalanceCheckerProps {
  inputState: IUseInput;
  onHandleValidation: any; // todo any
}

const BalanceChecker: React.FC<IBalanceCheckerProps> = ({
  inputState,
  onHandleValidation,
}) => (
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

export default BalanceChecker;
