import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Gloablinfo } from '../App';

function Cart({ show, toggleCart }) {
  const { add, removehandler, token } = React.useContext(Gloablinfo);

  return (
    <Modal show={show} onHide={toggleCart}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {add.map((item) => (
            <div key={item.key} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
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
                onClick={() => removehandler(item.key)}
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
