// ShoeList.js

import React, { useState } from 'react';

const ShoeList = ({ shoes, addToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeClick = (shoe, size) => {
    addToCart(shoe, size);
    setSelectedSizes((prevSizes) => {
      const key = `${shoe.name}-${size}`;
      const updatedSizes = { ...prevSizes, [key]: (prevSizes[key] || 0) + 1 };
      return updatedSizes;
    });
  };

  return (
    <div>
      <h2>Shoe List</h2>
      <ul>
        {shoes.map((shoe, index) => (
          <li key={index}>
            <strong>{shoe.name}</strong> - ${shoe.price} - {shoe.description} -{shoe.size}
            <button onClick={() => handleSizeClick(shoe, 'small')}>Add Small</button>
            <button onClick={() => handleSizeClick(shoe, 'medium')}>Add Medium</button>
            <button onClick={() => handleSizeClick(shoe, 'large')}>Add Large</button>
        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;
