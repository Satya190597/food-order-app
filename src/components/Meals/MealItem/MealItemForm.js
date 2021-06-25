// + Import CSS.
import style from "./MealItemForm.module.css";

// + Import Components.
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <div className={style["form"]}>
      <Input
        input={{ id: "amount_" + props.id, type: "number", min: "1", max: "5" }}
        label="Amount"
      />
      <button>+ Add</button>
    </div>
  );
};

export default MealItemForm;
