// + Import Component.
import CartIcon from "../Cart/CartIcon";

// + Import CSS.
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderCartButton;