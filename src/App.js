// + Import defaults.
import { useState } from "react";

// + Import components.
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
  const [isCartItemVisible, setIsCartItemVisible] = useState(false);

  const showCartItemModalPopup = () => {
    setIsCartItemVisible(true);
  };

  const hideCartItemModalPopup = () => {
    setIsCartItemVisible(false);
  };

  return (
    <CartProvider>
      {isCartItemVisible && (
        <Cart hideModalPopupHandler={hideCartItemModalPopup} />
      )}
      <Header showModalPopupHandler={showCartItemModalPopup} />
      <MealsSummary />
      <Meals />
    </CartProvider>
  );
}

export default App;
