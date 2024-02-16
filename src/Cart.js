// Cart.js

import React, { useState, useEffect } from 'react';

const Cart = ({ cart, removeFromCart, finalizeOrder }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  

  useEffect(() => {
    // Calculate total amount whenever the cart changes
    let newTotalAmount = 0;
    for (const item of cart) { 
const d=+item.price;
newTotalAmount=newTotalAmount+d
      };
       setTotalAmount(newTotalAmount);
  }, [cart]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - ${item.price} - {item.size}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount}</p>
 
      <button onClick={finalizeOrder}>Order</button>
      <button onClick={() => console.log('Order canceled')}>Cancel</button>
    </div>
  );
};

export default Cart;
