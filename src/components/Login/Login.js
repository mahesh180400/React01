import React, { useState,useReducer,useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/authContext';
import Input from '../UI/Input/Input';

const emailReducer=(state,action)=>{ 
  if(action.type==='USER_INPUT')
  {
    return {value:action.val, isValid:action.val.includes('@')}
  }if(action.type==='INPUT_BLUR')
  {
    return {value:state.value,isValid:state.value.includes('@')}
  }
  return {value:'',isValid:false}
}

const Login = (props) => {
 // const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{value:'', isValid:null});
  const authCtx=useContext(AuthContext)
  /*useEffect(()=>{
    const TimeOutId=setTimeout(()=>{
      console.log("Check Validity")
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    }, 1000)
    return ()=>{clearTimeout(TimeOutId) ; console.log("Clean")};
  },   [enteredEmail,enteredPassword]  )
  */

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value})
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
      );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
      );
  };


  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
      <Input id='email' label='E-mail' type='email' isValid={emailState}
      value={emailState.value}
      onBlur={emailChangeHandler}
      ></Input>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
