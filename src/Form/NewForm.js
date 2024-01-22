// NewForm.js

import './NewForm.css';
import { useState } from 'react';

const NewForm = (props) => {
  const [Id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');

  const idHandler = (event) => {
    setId(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    if (Id.trim().length === 0) {
      alert('Please enter a valid ID.');
      return;
    }

    if (price.trim().length === 0) {
      alert('Check Your Price');
      return;
    }

      props.onAddUser(Id, price, name);
    

    
    setId('');
    setPrice('');
    setName('');
  };

  return (
    <div className='container'>
      <form onSubmit={formHandler}>
        <label>Product Id:</label>
        <input type='number' value={Id} onChange={idHandler} />
        <label>Selling Price:</label>
        <input type='number' value={price} onChange={priceHandler} />
        <label>Product Name:</label>
        <input type='text' value={name} onChange={nameHandler} />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
};

export default NewForm;
