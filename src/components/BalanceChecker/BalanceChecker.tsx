import React from "react";
import Button from "components/common/Button";
import Input, { IUseInput } from "components/common/Input";
import DwellingIcon from "icons/DwellingIcon";
import { INPUT_NAMES } from "./constants";
import classNames from "classnames";

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
}) => {
  const hasErrors: boolean = !!inputState.errors[INPUT_NAMES.ccNumber];

  const inputFieldClassName: string = classNames("BalanceChecker__inputField", {
    "BalanceChecker__inputField--hasErrors": hasErrors,
  });

  return (
    <>
      <div className="BalanceChecker">
        <h2 className="BalanceChecker__header">
          Balance Checker <DwellingIcon />
        </h2>

        <p>Enter your card number to check its balance.</p>

        <Input
          className={inputFieldClassName}
          name={INPUT_NAMES.ccNumber}
          placeholder="xxxx xxxx xxxx xxxx"
          inputState={inputState}
        />

        {/* Error message */}
        {hasErrors && (
          <div className="BalanceChecker__errMsg">
            {inputState.errors[INPUT_NAMES.ccNumber]}
          </div>
        )}

        {/* Balance */}
        {/* todo format dollar with decimals */}
        {!!balance && (
          <div className="BalanceChecker__balanceMsg">
            Your balance is ${balance}
          </div>
        )}
      </div>

      <Button onClick={onHandleValidation}>Check</Button>
    </>
  );
};

export default BalanceChecker;
