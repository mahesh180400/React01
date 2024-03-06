import React, { useContext,useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Gloablinfo } from '../App';
import AuthContext from '../store/authcontext';
function Cart({ show, toggleCart }) {
  const authctx=useContext(AuthContext)
  const {  removehandler, token } = React.useContext(Gloablinfo);
  const [cartData, setCartData] = useState([]);
  
  const emailid=authctx.newEmail;
  const indexOfAt = emailid.indexOf('@');
const substringResult = emailid.slice(0 ,indexOfAt);
console.log(substringResult)
  useEffect(() => {
    // Fetch cart data when the component mounts
    const fetchData = async () => {
      
      try {
        
        const response = await axios.get(`https://crudcrud.com/api/fbed444f7efb438683f1a809489495ed/cart${substringResult}`);
        setCartData(response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error.message);
      }
    };

    fetchData(); 
  }, [substringResult]); 



  // Check if cartData is an array before mapping over it
  if (!Array.isArray(cartData)) {
    console.error('cartData is not an array:', cartData);
    return null; // You can return a placeholder or handle the error appropriately
  }

  return (
    <Modal show={show} onHide={toggleCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {cartData.map((item) => (
            <div key={Math.random().toString()} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ maxWidth: '10%', height: 'auto', marginRight: '10px' }}
              />
              <label>Item Title=</label>
              {item.title},
              <label>Quantity:</label>
              <input
                style={{ width: '40px' }}
                type='number'
                min='1'
                size='1'
                defaultValue={1}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <label>Price=</label>
              {item.price}
              <Button
                variant="dark"
                style={{ borderRadius: '9px', paddingBottom: '2px', paddingTop: '2px' }}
                onClick={() => removehandler(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
          <h3>Total Items: {token}</h3>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" style={{ marginRight: '10px' }} onClick={() => toggleCart()}>
          Purchase
        </Button>
        <Button variant="outline-danger" onClick={() => toggleCart()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
