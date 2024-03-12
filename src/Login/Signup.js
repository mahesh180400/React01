import { useState,useContext } from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../Store/authcontext';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
const authctx=useContext(AuthContext);
const navigate=useNavigate();
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [conpass, setconpass] = useState('');
  const [islogin, setislogin] = useState(true);
  const [isloading,setisloading]=useState(false);
  
  
  const swithAuthmodeHandler=()=>{
    setislogin((prev)=>!prev)
  }

  const handlesign = (e) => {
    e.preventDefault();
    setisloading(true)
    
    let url;
    if(islogin)
    {
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck'
    }else{
        if(pass!==conpass)
        {   setisloading(false)
            alert("password and confirm password is not match")
            return 
        }
        url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck'
    }
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
    setisloading(false)
    if(res.ok){
      return res.json();

    }else{
        return res.json().then ((data)=>{
         let errorMessage="Authentication FAiled!";
        throw new Error(errorMessage)
        })
     }
   }).then((data)=>{
    authctx.login(data.idToken)
  islogin?navigate('/profile_edit'):navigate("");
    console.log('All OK',data.idToken);
    swithAuthmodeHandler()
   })
   .catch((err)=>{
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
    <>
    <div className={styles.container}>
      <h2>{islogin?"LogIn":"SignUP"}</h2>
      <label>Email:</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setemail(e.target.value)} 
      ></input>
    
     {!islogin&& (<>
       <label>New Password:</label>
     <input
        type="password"
        required
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        minLength={6}
      ></input></>)} 
     <label>{!islogin?"Confirm Password":"Password"}</label>
      <input
        type="password"
        required
        value={conpass}
        onChange={(e) => setconpass(e.target.value)}
        minLength={6}
      ></input>
     {!isloading&& <button onClick={handlesign}>{islogin?"login":"Sign Up"}</button>}
      {isloading && <p>Sending request....</p>}
      <div className={styles.forgotPasswordLink}>
          <Link to="/forgot_password">Forgot Password?</Link>
        </div>
      <p>Have an Account ?{' '}
        <button className={styles.secondary}
        onClick={swithAuthmodeHandler}
        >
          {!islogin ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
    </>
  );
}

export default Signup;
