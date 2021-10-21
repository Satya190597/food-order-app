// + Import Default
import { useContext, useState, useEffect } from "react";

// + Import Component.
import CartIcon from "../Cart/CartIcon";

// + Import CSS.
import styles from "./HeaderCartButton.module.css";

// + Import Cart Context
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const [bumpAnimationIsActive, setBumpAnimationIsActive] = useState(false);

  // Use cart context.
  const cartContext = useContext(CartContext);

  const numberOfCartItem = cartContext.items.reduce((totalValue, item) => {
    return totalValue + item.quantity;
  }, 0);
  //const numberOfCartItem = cartContext.items;

  const buttonClass = `${styles.button} ${
    bumpAnimationIsActive ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length >= 1) {
      setBumpAnimationIsActive(true);
    }
    const timeout = setTimeout(() => {
      setBumpAnimationIsActive(false);
    }, 300);

    // Cleanup Function.
    return () => {
      clearTimeout(timeout);
    };
  }, [cartContext.items]);

  return (
    <button
      className={buttonClass}
      onClick={() => props.showModalPopupHandler()}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
