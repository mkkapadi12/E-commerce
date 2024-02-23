import React from "react";
import CurrencyFormate from "../Helper/CurrencyFormate";
import AmoutCartToggle from "./AmoutCartToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, color, price, amount, image, name, max }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

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
            setDecrese={() => setDecrement(id)}
            setIncrese={() => setIncrement(id)}
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
