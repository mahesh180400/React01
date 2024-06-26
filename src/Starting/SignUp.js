import React, { useState } from 'react';
import {  Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [login,setlogin]=useState(true);

const SwithMode=()=>{
  setlogin((pre)=>!pre)
}
const navigate=useNavigate()





  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      alert('Please enter an email address.');
    } else if (!password) {
      alert('Please enter a password.');
    } else if (!login && password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
       let url;
      if(!login){ url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbQ51DQRnCUsZepzWhdB8Mx7ZzEjH6fh0';}
       else{url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbQ51DQRnCUsZepzWhdB8Mx7ZzEjH6fh0'}
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed!";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log('User Id', data);
         if(login){
          navigate('/Main')
          localStorage.setItem('ID',data.idToken);
          SwithMode()
         }
         SwithMode()
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  return (
    <div className="custom-container"> {/* Apply your custom container class */}
      <div className="content">
        <div className="p-4 rounded">
          <h2 className="text-center mb-4">{login ? "Login" : "Signup"}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {!login && <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>}

            <Button variant="custom-primary" type="submit" block>
              {login ? "Login" : "Sign UP"}
            </Button>
            <br></br>
            <strong>{login ? "If you are new here ?" : "If you have an account ?"}
              <Button variant="custom-primary" onClick={SwithMode} block>
                {!login ? "Login" : "Sign UP"}
              </Button>
            </strong>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;