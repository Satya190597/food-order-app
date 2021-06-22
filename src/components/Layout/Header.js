// + Import Default.
import {Fragment} from 'react';

// + Import CSS.
import styles from './Header.module.css';

// + Import Image.
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
    return (
        <Fragment>
            <header className={styles['header']}>
                <h1>Food ordering app</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food." />
            </div>
        </Fragment>
    )
}

export default Header;