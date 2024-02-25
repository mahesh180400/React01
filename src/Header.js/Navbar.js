import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Navbarr(props) {
  const [show,setshow]=useState(false);
  
  const showdata = (props) => {
    setshow((prev)=>!prev)
    
    
  };
  const removehandler=(productkey)=>{
    props.removehandler(productkey)
  }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="dark" onClick={() => showdata(props)}>
          CART
        </Button>
        <Badge bg="secondary">{props.token}</Badge>
      </Container>
    </Navbar>
    {show && (
    <Container style={{ width: '350px', border: '1px solid #ccc', padding: '10px' }}>
    <div>
      {props.add.map((item) => (
        <div key={item.key} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
            <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '10%', height: 'auto',marginRight:'10px' }} />
          <label>Item Title=</label>{item.title}, 
          <label>Price=</label>{item.price} 
          <Button variant="dark" style={{borderRadius:'9px', paddingBottom:'2px',paddingTop:'2px'} } onClick={()=>removehandler(item.key)}>Remove</Button>
        
        </div>
      ))}
      <Button variant="dark" onClick={() => showdata(props)}>Purchase</Button>
      <Button variant="dark" onClick={() => showdata(props)}>Close</Button>
    </div>
  </Container>
)}

    
 

    </>
  );
}

export default Navbarr;
