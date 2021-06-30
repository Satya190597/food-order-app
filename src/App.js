// + Import defaults.
import {Fragment} from 'react';

// + Import components.
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <MealsSummary/>
      <Meals />
    </Fragment>
  );
}

export default App;
