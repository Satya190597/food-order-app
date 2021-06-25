// + Import defaults.
import {Fragment} from 'react';

// + Import components.
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from './components/Meals/Meals';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary/>
      <Meals />
    </Fragment>
  );
}

export default App;
