// + Import CSS.
import style from "./MealItem.module.css";

// + Import Component.
import MealItemForm from "./MealItemForm";

// + CartItem Context.
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={style["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={style["description"]}>{props.description}</div>
        <div className={price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
