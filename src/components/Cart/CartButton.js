import { uiAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {  useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch()
  const totalProduct=useSelector(state=>state.cart.totalQuantity)
  const togglehandler=()=>{
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={togglehandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalProduct}</span>
    </button>
  );
};

export default CartButton;
