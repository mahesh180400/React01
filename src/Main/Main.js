import { useContext, useState,useEffect } from 'react';
import styles from './Main.module.css';
import AuthContext from '../Store/authcontext';
import {  useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate=useNavigate();
  const [Money, setMoney] = useState('');
  const [edit,setedit]=useState(false);
  const [editid,seteditid]=useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('Select');
  const [expenses, setExpenses] = useState([]);

  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  const logoutHandler = () => {
    authctx.logout();
    navigate("/")

  };

  
  useEffect(()=>{
    let newurl="https://desire-acb3b-default-rtdb.firebaseio.com/userdata.json"
    fetch(newurl,{
    method:'GET',
   }).then((res)=>{
    if(res.ok){
      return res.json();
    }else{
        return res.json().then ((data)=>{
         let errorMessage="Fetching list Data FAiled!";
        throw new Error(errorMessage)
        })
     }
   }).then((data)=>{
    
    const keys = data && Object.keys(data);
    const newExpenses = keys.map((key) => ({ id: key, ...data[key] }));
    setExpenses(newExpenses);
    console.log(newExpenses);
        })
   .catch((err)=>{
    alert(err.message)
   })
  },[])



  const handleDelete = (expense_id) => {
 

    const updatedExpenses = expenses.filter((expense) => expense.id !== expense_id);
    setExpenses(updatedExpenses);
    // Send DELETE request to Firebase
    const deleteUrl = `https://desire-acb3b-default-rtdb.firebaseio.com/userdata/${expense_id}.json`;
    fetch(deleteUrl, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Deleting Failed!');
        }else{
          console.log("Delete Successfully")
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  const handleEdit = (expense) => {

    const id=expense.id
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    console.log('editcalled')
    setMoney(expense.Money);
    setDescription(expense.Description);
    setCategory(expense.Category);
    setedit(true);
    seteditid(expense.id)
  };





  const handleSubmit = (e) => {
    e.preventDefault();

    if (Money && Description && Category !== 'Select') {
      const newExpense = {
        Money,
        Description,
        Category,
      };
      setExpenses([...expenses, newExpense]);

      const chooseputorpost=edit;
      if(chooseputorpost)
      {
        // Assuming you have the selectedExpenseKey state set when editing an expense
const updateUrl = `https://desire-acb3b-default-rtdb.firebaseio.com/userdata/${editid}.json`;

fetch(updateUrl, {
  method: 'PUT',
  body: JSON.stringify({
    Money: Money,
    Description: Description,
    Category: Category,
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((res) => {
    if (res.ok) {
      console.log('Update Successful');
      setedit(false)
      seteditid("");
      setMoney('');
      setDescription('');
      setCategory('Select');
    } else {
      return res.json().then((data) => {
        let errorMessage = 'Updating Failed!';
        throw new Error(errorMessage);
      });
    }
  })
  .catch((err) => {
    alert(err.message);
  });



 }else
      {
        let url="https://desire-acb3b-default-rtdb.firebaseio.com/userdata.json"
      fetch(url,{
        method:'POST',
        body:JSON.stringify({
           Money:Money,
           Description:Description,
           Category:Category,
        }),
        headers:{
            'Content-type':'application.json'
        }
       }).then((res)=>{
        if(res.ok){
          return res.json();
    
        }else{
            return res.json().then ((data)=>{
             let errorMessage="Uploading FAiled!";
            throw new Error(errorMessage)
            })
         }
       }).then((data)=>{
        console.log('All OK');
       })
       .catch((err)=>{
        alert(err.message)
       })
       setMoney('');
      setDescription('');
      setCategory('Select');
    } 
    }
  };

  return (
    <div className={styles.container}>
      {isLoggedIn && <button onClick={logoutHandler} className={styles.logoutButton}>Log Out</button>}
      <form onSubmit={handleSubmit}>
        <h2>Expense Form</h2>
        <strong>Money:</strong>
        <input type="number" value={Money} onChange={(e) => setMoney(e.target.value)} />
        <strong>Description:</strong>
        <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} />
        <strong>Category:</strong>
        <select value={Category} onChange={(e) => setCategory(e.target.value)}>
          <option>Select</option>
          <option>Food</option>
          <option>Petrol</option>
          <option>Salary</option>
        </select>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>

      <div>
        <h2>Expense List</h2>
        <ul>
          {expenses && expenses.map((expense,index) => (
            <li key={index}>
              <strong>Money:</strong> {expense.Money}, <strong>Description:</strong>{' '}
              {expense.Description}, <strong>Category:</strong> {expense.Category}
              <button onClick={()=>handleEdit(expense)}>Edit</button>
               <button onClick={()=>handleDelete(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
