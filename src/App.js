// + Import defaults.
import {Fragment,useState} from 'react';

// + Import components.
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {

  const [isCartItemVisible,setIsCartItemVisible] = useState(false)

  const showCartItemModalPopup = () => {
    setIsCartItemVisible(true)
  }

  const hideCartItemModalPopup = () => {
    setIsCartItemVisible(false)
  }

  return (
    <Fragment>
      { isCartItemVisible && <Cart hideModalPopupHandler={hideCartItemModalPopup} />}
      <Header showModalPopupHandler={showCartItemModalPopup} />
      <MealsSummary/>
      <Meals />
    </Fragment>
  );
}

export default App;
