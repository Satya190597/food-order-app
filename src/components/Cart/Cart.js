// + Import CSS
import styles from "./Cart.module.css";

// + Import Component
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((element) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <div>
        {cartItems}
        <div className={styles["total"]}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles["actions"]}>
          <button className={styles["button--alt"]}>Close</button>
          <button className={styles["button"]}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
