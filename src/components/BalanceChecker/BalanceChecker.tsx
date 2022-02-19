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
  onHandleValidation: () => void;
}

const BalanceChecker: React.FC<IBalanceCheckerProps> = ({
  balance,
  inputState,
  onHandleValidation,
}) => {
  const hasErrors: boolean = !!inputState.errors[INPUT_NAMES.ccNumber];
  const hasBalance: boolean = !!balance;

  const inputFieldClassName: string = classNames("BalanceChecker__inputField", {
    "BalanceChecker__inputField--hasErrors": hasErrors,
    "BalanceChecker__inputField--hasBalance": hasBalance,
  });

  const formattedBalance: string = Number.parseFloat(balance).toFixed(2);

  return (
    <div className="BalanceChecker">
      <div className="BalanceChecker__card">
        <h2 className="BalanceChecker__header">
          Balance checker <DwellingIcon />
        </h2>

        <p>Enter your card number to check its balance.</p>

        <Input
          isAutoCompleteOff
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
        {hasBalance && (
          <div className="BalanceChecker__balanceMsg">
            Your balance is ${formattedBalance}
          </div>
        )}
      </div>

      <Button
        isFullWidth
        className="BalanceChecker__checkBtn"
        onClick={onHandleValidation}
      >
        Check
      </Button>
    </div>
  );
};

export default BalanceChecker;
