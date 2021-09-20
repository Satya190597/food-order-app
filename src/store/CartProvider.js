import React from "react";
import CartContext from "./CartContext";
const CartProvider = (props) => {
  const addItem = (item) => {};
  const removeItem = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => addItem,
    removeItem: (item) => removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
