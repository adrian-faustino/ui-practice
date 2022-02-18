import React from "react";
import BalanceChecker from "./BalanceChecker";
import { useInput, IUseInput } from "components/common/Input";
import { INPUT_NAMES } from "./constants";

/* This component manages all state, services, and handlers. The child component will purely be responsible for displaying any data */

const BalanceCheckerContainer = () => {
  const inputState: IUseInput = useInput();
  const { values = {} } = inputState;

  const onHandleValidation = () => {
    console.log("@@@@ Validating:", values[INPUT_NAMES.ccNumber]);
  };

  return (
    <BalanceChecker
      inputState={inputState}
      onHandleValidation={onHandleValidation}
    />
  );
};

export default BalanceCheckerContainer;
