import React from "react";
import Button from "components/common/Button";
import Input, { IUseInput } from "components/common/Input";
import { INPUT_NAMES } from "./constants";

import "./BalanceChecker.scss";

/* This is a purely presentational component. All state, services, and handlers should be managed by the parent container */

interface IBalanceCheckerProps {
  balance: string;
  inputState: IUseInput;
  onHandleValidation: any; // todo any
}

const BalanceChecker: React.FC<IBalanceCheckerProps> = ({
  balance,
  inputState,
  onHandleValidation,
}) => (
  <div className="BalanceChecker">
    <h3>Balance Checker</h3>

    <p>Enter your card number to check its balance.</p>

    <Input
      name={INPUT_NAMES.ccNumber}
      placeholder="xxxx xxxx xxxx xxxx"
      inputState={inputState}
    />

    {/* Error message */}
    {!!inputState.errors[INPUT_NAMES.ccNumber] && (
      <div>{inputState.errors[INPUT_NAMES.ccNumber]}</div>
    )}

    {/* Balance */}
    {/* todo format dollar with decimals */}
    {!!balance && <div>Your balance is ${balance}</div>}

    <div>
      <Button onClick={onHandleValidation}>Check</Button>
    </div>
  </div>
);

export default BalanceChecker;
