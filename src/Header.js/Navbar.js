import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
          <Link to="/store" className="nav-link" style={{ color: 'white' }}>Store</Link>
            <Link to="/about" className="nav-link" style={{ color: 'white' }}>About</Link>
            <Link to="/login" className="nav-link" style={{ color: 'white' }}>Login</Link>
            <Link to="/contact" className="nav-link" style={{ color: 'white' }}>Contact US</Link>

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
