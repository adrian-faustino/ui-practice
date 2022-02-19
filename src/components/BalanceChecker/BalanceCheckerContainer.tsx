import React, { useState, useEffect } from "react";
import BalanceChecker from "./BalanceChecker";
import { useInput, IUseInput } from "components/common/Input";
import {
  INPUT_NAMES,
  INPUT_ERROR_MESSAGES,
  VALID_CC_NUMBER_LENGTH,
} from "./constants";
import { isNumeric } from "utils/math";

/* This component manages all state, services, and handlers. The child component will purely be responsible for displaying any data */

const BalanceCheckerContainer = () => {
  const inputState: IUseInput = useInput();
  const { values = {} } = inputState;
  const [balance, setBalance] = useState<string>("");

  const onHandleValidation = () => {
    const inptName = INPUT_NAMES.ccNumber;
    // remove spaces between every 4 digits
    const ccNum = values[inptName]?.replaceAll(" ", "");

    const onSetGenericErr = () =>
      inputState.onSetErrors(inptName, INPUT_ERROR_MESSAGES[inptName]);

    // check if 16 digit len requirement is met
    if (ccNum.length !== VALID_CC_NUMBER_LENGTH) {
      return onSetGenericErr();
    }

    // check if int
    const isValidNum = isNumeric(ccNum);
    if (!isValidNum) {
      return onSetGenericErr();
    }

    // validation passed
    onCalculateBalance(ccNum);
  };

  // if last num ends in 5 or 2 -> sum first 12 nums, else return 0
  const onCalculateBalance = (ccNum: string) => {
    const lastNum = ccNum.substring(ccNum.length - 1);
    let sum: number = 0;

    const sumIf: string[] = ["5", "2"];
    if (sumIf.includes(lastNum)) {
      const first12digits: number[] = ccNum
        .substring(0, 12)
        .split("")
        .map((e) => parseInt(e));

      sum = first12digits.reduce((acc, cur) => acc + cur, 0);
    }

    return setBalance(sum.toString());
  };

  // adds spaces every 4 digits
  const withFormattedCreditCardNumber = (): IUseInput => {
    const str: string = inputState.values[INPUT_NAMES.ccNumber];
    const spaceStripped: string = str?.replaceAll(" ", "") || "";
    const spacedOut: string = spaceStripped
      .split("")
      .map((d, i) => (i % 4 === 0 ? " " + d : d))
      .join("")
      .trim();

    inputState.values[INPUT_NAMES.ccNumber] = spacedOut;
    return inputState;
  };

  // Effect to clar input field when user enters new value
  useEffect(() => {
    setBalance("");
  }, [inputState.values]);

  return (
    <BalanceChecker
      balance={balance}
      inputState={withFormattedCreditCardNumber()}
      onHandleValidation={onHandleValidation}
    />
  );
};

export default BalanceCheckerContainer;
