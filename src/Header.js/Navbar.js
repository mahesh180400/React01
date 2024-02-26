import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Gloablinfo } from '../App';
import Cart from './Cart';

function Navbarr() {
  const { token } = useContext(Gloablinfo);
  const [show, setShow] = React.useState(false);
  const toggleCart = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
          <Navbar.Brand href="home">Home</Navbar.Brand>
            <Nav.Link href="Store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Button variant="dark" onClick={toggleCart}>
            CART
          </Button>
          <Badge bg="secondary">{token}</Badge>
        </Container>
      </Navbar>
      
      <Cart show={show} toggleCart={toggleCart} />
    </>
  );
}

export default Navbarr;
