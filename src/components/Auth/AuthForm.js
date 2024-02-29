import { useState,useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputref=useRef();
  const passwordInputref=useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isloading,setisloading]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailInputref.current.value;
    const enteredpass=passwordInputref.current.value;
    setisloading(true)
    if(isLogin){

    }else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck',
      {
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredpass,
          returnSecureToken:true
        }),
        headers:{
          'Content-type':'application.json'
        }
      }
      ).then((res)=>{
        setisloading(false)
        if(res.ok){

        }else{
        return res.json().then((data)=>{
            let errorMessage='Authentication failed!';
           /* if(data && data.error&&data.error.message)
            {
              errorMessage=data.error.message
            }
            */
            alert(errorMessage)
          })
        }
      }
      )
    }
  }



  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputref}
          />
        </div>
        <div className={classes.actions}>
         {!isloading&& <button>{isLogin ?'Login':'Create Account'}</button>}
         {isloading && <p>Sending request....</p>}
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
