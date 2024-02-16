// App.js

import React, { useState } from 'react';
import ShoeForm from './ShoeForm';
import ShoeList from './ShoeList';
import Cart from './Cart';

function App() {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  const addShoe = (shoe) => {
    setShoes([...shoes, shoe]);
  };

  const addToCart = (shoe, size) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...shoe, size }];
      return updatedCart;
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const finalizeOrder = () => {
    // Implement order finalization logic here
    console.log('Order placed successfully');
  };

  return (
    <div>
      <ShoeForm addShoe={addShoe} />
      <ShoeList shoes={shoes} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} finalizeOrder={finalizeOrder} />
    </div>
  );
}

export default App;
