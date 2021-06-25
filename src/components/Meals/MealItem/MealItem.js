// + Import CSS.
import style from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={style["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={style["description"]}>{props.description}</div>
        <div className={style["price"]}>{props.price}</div>
      </div>
    </li>
  );
};

export default MealItem;
