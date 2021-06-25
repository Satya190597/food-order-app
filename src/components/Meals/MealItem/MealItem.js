// + Import CSS.
import style from "./MealItem.module.css";

// + Import Component.
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    const price = `$${props.price}`

  return (
    <li className={style["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={style["description"]}>{props.description}</div>
        <div className={price}>{props.price}</div>
      </div>
      <div>
          <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
