import { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [conpass, setconpass] = useState('');
  const [isSignup, setisSignup] = useState(true);

  const handlesign = (e) => {
    e.preventDefault();
    if(pass!==conpass)
    {
        alert("password and confirm password is not match")
        return 
    };
    let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck'
   fetch(url,{
    method:'POST',
    body:JSON.stringify({
        email:email,
        password:conpass,
        returnSecureToken:true
    }),
    headers:{
        'Content-type':'application.json'
    }
   }).then((res)=>{
    if(res.ok){
        console.log('User Signup Successfuly')
    }else{
        let errorMessage="Authentication FAiled!";
        throw new Error(errorMessage)
    }
   }).catch((err)=>{
    alert(err.message)
   })
   
    const user = {
      email: email,
      password: conpass,
    };
    console.log(user);
    setemail('');
    setpass('');
    setconpass('')
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        required
      ></input>
      <label>Password:</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        minLength={6}
        required
      ></input>
      <label>Confirm Password:</label>
      <input
        type="password"
        value={conpass}
        onChange={(e) => setconpass(e.target.value)}
        minLength={6}
        required
      ></input>
      <button onClick={handlesign}>Sign Up</button>
      <p>
        Have an Account ?{' '}
        <button className={styles.secondary}>
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Signup;
