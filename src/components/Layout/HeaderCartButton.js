// + Import Default
import { useContext } from "react";

// + Import Component.
import CartIcon from "../Cart/CartIcon";

// + Import CSS.
import styles from "./HeaderCartButton.module.css";

// + Import Cart Context
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  // Use cart context.
  const cartContext = useContext(CartContext);

  const numberOfCartItem = cartContext.items.reduce((totalValue, item) => {
    return totalValue + item.amount;
  }, 0);
  //const numberOfCartItem = cartContext.items;

  return (
    <button
      className={styles.button}
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
