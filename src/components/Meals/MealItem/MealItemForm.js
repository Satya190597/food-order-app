// + Import Default.
import { useRef, useState } from "react";

// + Import CSS.
import style from "./MealItemForm.module.css";

// + Import Components.
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = parseInt(quantityInputRef.current.value);
    if (isNaN(enteredQuantity)) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantity);
  };

  return (
    <form className={style["form"]} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        input={{ id: "amount_" + props.id, type: "number", min: "1", max: "5" }}
        label="Quantity"
      />
      <button type="submit">+ Add</button>
      {!quantityIsValid && "Please enter a valid input"}
    </form>
  );
};

export default MealItemForm;
