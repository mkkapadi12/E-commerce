import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const AmoutCartToggle = ({ amount, setDecrese, setIncrese }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrese()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrese()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default AmoutCartToggle;
