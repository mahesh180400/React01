// SimpleForm.js
import React from 'react';
import { useFormData } from '../Store/FormDataContext';
import axios from 'axios'
const BeautifulForm = () => {
  const { addFormData } = useFormData();
  const [formData, setFormData] = React.useState({
    name: '',
    description : '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formData);
    axios.post(`https://crudcrud.com/api/5943da8d23da47c0892d48e5c41b0f2d/candylist`,formData)
    setFormData({ name: '', description: '', price: '' });
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Candy Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BeautifulForm;
