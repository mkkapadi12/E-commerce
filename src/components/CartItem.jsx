import React from "react";
import CurrencyFormate from "../Helper/CurrencyFormate";
import AmoutCartToggle from "./AmoutCartToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, color, price, amount, image, name }) => {
  const { removeItem } = useCartContext();

  const setDecrese = () => {
    //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrese = () => {
    //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="cart-hide">
          <p>
            <CurrencyFormate price={price} />
          </p>
        </div>
        {/* Quantity */}
        <div>
          <AmoutCartToggle
            amount={amount}
            setDecrese={setDecrese}
            setIncrese={setIncrese}
          />
        </div>
        {/* SubTotal */}
        <div className="cart-hide">
          <p>
            <CurrencyFormate price={price * amount} />
          </p>
        </div>
        <div>
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
