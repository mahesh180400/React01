import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector((state)=>state.counter.counter);
  const show=useSelector((state)=>state.counter.showCounter)
const incrementhandler=()=>{
  dispatch(counterActions.increment())
};
const decrementhandler=()=>{
  dispatch(counterActions.decrement())
}
const increasehandler=()=>{
  dispatch(counterActions.increase(10))
}
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementhandler}>Increment </button>
      <button onClick={increasehandler}>Increase by 5</button>
      <button onClick={decrementhandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
