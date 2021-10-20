// + Import Default.
import { useRef, useState } from "react";

// + Import CSS.
import style from "./MealItemForm.module.css";

// + Import Components.
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amountInputRef.current.value);
    if (isNaN(enteredAmount)) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={style["form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{ id: "amount_" + props.id, type: "number", min: "1", max: "5" }}
        label="Amount"
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && "Please enter a valid input"}
    </form>
  );
};

export default MealItemForm;
