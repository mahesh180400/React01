import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
const ProfileForm = () => {
  const newPasswordInputref=useRef();
  const authctx=useContext(AuthContext);
  const submitHandler=event=>{
    event.preventDefault();
    const enteredNewPassword=newPasswordInputref.current.value;
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck',
  {
    method:'POST',
    body:JSON.stringify({
      idToken:authctx.token,
      password:enteredNewPassword,
      returnSecureToken:false,
    }),
    headers:{
      'Content-Type':'application/json'
    }
  }).then((res)=>{
    
  })
  
  
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="6" ref={newPasswordInputref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
