// ShoeForm.js

import React, { useState } from 'react';

const ShoeForm = ({ addShoe }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [sizes, setSizes] = useState({ small: false, medium: false, large: false });

  const handleAddShoe = () => {
    const selectedSizes = Object.keys(sizes).filter((size) => sizes[size]);
    addShoe({ name, price, description, sizes: selectedSizes });
    setName('');
    setPrice('');
    setDescription('');
    setSizes({ small: false, medium: false, large: false });
  };

  const handleCheckboxChange = (size) => {
    setSizes((prevSizes) => ({ ...prevSizes, [size]: !prevSizes[size] }));
  };

  return (
    <div>
      <h2>Add Shoe</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>
        Sizes:
        <input type="checkbox" checked={sizes.small} onChange={() => handleCheckboxChange('small')} /> Small
        <input type="checkbox" checked={sizes.medium} onChange={() => handleCheckboxChange('medium')} /> Medium
        <input type="checkbox" checked={sizes.large} onChange={() => handleCheckboxChange('large')} /> Large
      </label>
      <button onClick={handleAddShoe}>Add Product</button>
    </div>
  );
};

export default ShoeForm;
