import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password===confirmPassword) {

      let  url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbQ51DQRnCUsZepzWhdB8Mx7ZzEjH6fh0'
      fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true
        }),
        headers:{
            'Content-type':'application.json'
        }
       }).then((res)=>{
        if(res.ok){
          return res.json();
    
        }else{
            return res.json().then ((data)=>{
             let errorMessage="Authentication FAiled!";
            throw new Error(errorMessage)
            })
         }
       }).then((data)=>{
        console.log('User SignUp Successfully Now LogIn',data);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
       })
       .catch((err)=>{
        alert(err.message)
       })

} else {
      alert('Please Check all fields.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 rounded" style={{ backgroundColor: '#f8f9fa', maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Signup</h2>
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

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Sign Up
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default SignupForm;
