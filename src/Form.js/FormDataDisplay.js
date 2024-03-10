import { useFormData } from '../Store/FormDataContext';
import axios from 'axios';
const FormDataDisplay = () => {
  const { formDataList,listhandl2 } = useFormData();
  
  const listhandle=(item,quantity)=>{
    const data={
      name:item.name,
      description:item.description,
      price:item.price,
      quantity:quantity
    }
    listhandl2(data);
    axios.post('https://crudcrud.com/api/5943da8d23da47c0892d48e5c41b0f2d/finalcandylist',data)
  }


  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Candys List</h2>
      
        <ul>
          {formDataList && formDataList.map((item, index) => (
            <li key={index}>
              <strong> Candy Name:</strong> {item.name} <strong>Description:</strong> {item.description},{' '}
              <strong>Price:</strong> {item.price}
              <button onClick={()=>listhandle(item,"One")}>Add One</button>
              <button onClick={()=>listhandle(item,"Two")}>Add Two</button>
              <button onClick={()=>listhandle(item,"Three")}>Add Three</button>
            </li>
          ))}
        </ul>
     
    </div>
  );
};

const containerStyle = {
  marginTop: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '800px',
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
};

export default FormDataDisplay;
