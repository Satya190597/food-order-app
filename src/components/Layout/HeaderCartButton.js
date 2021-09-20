// + Import Default
import { useContext } from "react";

// + Import Component.
import CartIcon from "../Cart/CartIcon";

// + Import CSS.
import styles from "./HeaderCartButton.module.css";

// + Import Cart Context
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);

  return (
    <button
      className={styles.button}
      onClick={() => props.showModalPopupHandler()}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{context.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
