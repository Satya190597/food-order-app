import React, { useReducer } from "react";
import CartContext from "./CartContext";

// + Import Utils.
import { getUpdateItemsArray } from "./Utils/CartProviderUtil";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;
    return {
      items: getUpdateItemsArray(state.items, action.item),
      totalPrice: updatedTotalPrice,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex((i) => i.id === action.id);
    if (existingItemIndex == -1) {
      return;
    }
    const existingItem = state.items[existingItemIndex];
    const updatedTotalPrice = state.totalPrice - existingItem.price;
    let updatedItemsArray = [...state.items];
    if (existingItem.quantity === 1) {
      updatedItemsArray.splice(existingItemIndex, 1);
    } else {
      updatedItemsArray[existingItemIndex] = {
        ...updatedItemsArray[existingItemIndex],
        quantity: updatedItemsArray[existingItemIndex].quantity - 1,
      };
    }
    return {
      items: updatedItemsArray,
      totalPrice: updatedTotalPrice,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: (item) => addItemHandler(item),
    removeItem: (id) => removeItemHandler(id),
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
