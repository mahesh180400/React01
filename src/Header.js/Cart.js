import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Gloablinfo } from '../App';
function Cart({ show, toggleCart }) {
  const { add, removehandler,token } = React.useContext(Gloablinfo);

  return (
    <>
      {show && (
        <Container style={{ width: '350px', border: '1px solid #ccc', padding: '10px' }}>
          <div>
            {add.map((item) => (
              <div key={item.key} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
                <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '10%', height: 'auto', marginRight: '10px' }} />
                <label>Item Title=</label>{item.title},
                 <label>Quantity:</label><input  style={{ width: '50px' }} type='number'min='1' size='1'defaultValue={1} onChange={(e) =>{console.log(e.target.value);
  }}
/>

                 <label>Price=</label>{item.price}
                <Button variant="dark" style={{ borderRadius: '9px', paddingBottom: '2px', paddingTop: '2px',marginRight:'10px' }} onClick={() => removehandler(item.key)}>
                  Remove
                </Button>
              </div>
            ))}
            <h3>Total Items : {token}</h3>
            <Button variant="outline-success"  style={{marginRight:'10px'}}onClick={() => toggleCart()}>Purchase</Button>
            <Button variant="outline-danger" onClick={() => toggleCart()}>Close</Button>
          </div>
        </Container>
      )}
    </>
  );
}

export default Cart;
