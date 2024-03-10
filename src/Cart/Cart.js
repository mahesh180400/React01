import { useFormData } from "../Store/FormDataContext";
import './Cart.css'
const Cart=()=>{
const {cartlist}=useFormData();
    return <><label>Cart {cartlist.length}</label>
    <ul>
    {cartlist && cartlist.map((item,index)=>(
      
        <li key={index}>
        <strong>Candy Name: </strong>{item.name}, 
        <strong>Description: </strong>{item.description},
        <strong>Price: </strong>{item.price}, 
        <strong>Quantity: </strong>{item.quantity},
        </li>
    )
     )}</ul>
        
    </>
};
export default Cart;