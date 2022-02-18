import React from "react";
import Button from "components/common/Button";
import Input from "components/common/Input";

import "./BalanceChecker.scss";

const BalanceChecker = () => {
  return (
    <div className="BalanceChecker">
      <h3>Balance Checker</h3>

      <p>Enter your card number to check it's balance.</p>

      <Input />

      {/* Error message */}
      <p>Your balance is XXX</p>
      <p>Invalid number</p>

      <div>
        <Button onClick={() => {}}>Check</Button>
      </div>
    </div>
  );
};

export default BalanceChecker;
