// + Import CSS
import styles from "./Cart.module.css";

// + Import Component
import Modal from "../UI/Modal";

import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.totalPrice;

  const hasItems = cartContext.items.length > 0;

  // Remove Handler
  const removeHandler = (id) => {
    cartContext.removeItem(id);
  };
  // Add Handler
  const addHandler = (item) => {
    cartContext.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      <div>
        {cartItems}
        <div className={styles["total"]}>
          <span>Total Amount</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        <div className={styles["actions"]}>
          <button
            className={styles["button--alt"]}
            onClick={() => props.hideModalPopupHandler()}
          >
            Close
          </button>
          {hasItems && <button className={styles["button"]}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
