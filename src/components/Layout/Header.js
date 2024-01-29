import React,{Fragment} from 'react'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{

    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
         </header>
        <div className={classes['main-image']}>
            <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true' alt='A table Full of Delicious Food'/>
        </div>
    </Fragment>
    );
};
export default Header;