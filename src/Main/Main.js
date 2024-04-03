import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import { authaction } from '../Store/store';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [Money, setMoney] = useState('');
  const [edit, setEdit] = useState(false);
  const [editid, setEditId] = useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('Select');
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  const isPremium = useSelector(state => state.auth.isPremium);
  const isDarkTheme = useSelector(state => state.auth.isDarkTheme);
  const expenseArray = useSelector(state => state.auth.expenseArray);
  const totalAmount=expenseArray.reduce((total, item) => total + Number(item.Money), 0) 
  console.log(expenseArray,isLoggedIn);


  const logoutHandler = () => {
   dispatch(authaction.logout())
    navigate("/");
  };
  const fetchData =async () => {
    let newurl = "https://desire-acb3b-default-rtdb.firebaseio.com/userdata.json";
  
     await fetch(newurl, {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Fetching list Data Failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        if (data === null) {
      console.log("No data found.");
      
    } else {
      const keys = Object.keys(data);
      const newExpenses = keys.map((key) => ({ id: key, ...data[key] }));
      console.log(newExpenses)
      dispatch(authaction.addData(newExpenses));
    }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  },[]);
  const dispatch=useDispatch();

  const handleActivatePremium = () => {
    console.log("call 1")
    dispatch(authaction.activatePremium());
  };
  
const handleToggleTheme=()=>{
  dispatch(authaction.toggleTheme());
}

const handleDownloadExpenses=()=>{
  console.log("download expense",expenseArray);
  const csv = expenseArray.map(expense => Object.values(expense).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = 'expenses.csv';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}


  const handleDelete = async (expense_id) => {
    const deleteUrl = `https://desire-acb3b-default-rtdb.firebaseio.com/userdata/${expense_id}.json`;

    try {
      const response = await fetch(deleteUrl, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Deleting Failed!');
      }
      dispatch(authaction.deleteData(expense_id))
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = (expense) => {
    setMoney(expense.Money);
    setDescription(expense.Description);
    setCategory(expense.Category);
    setEdit(true);
    setEditId(expense.id);
    dispatch(authaction.deleteData(expense.id))
  };

  const handleSubmit = (e) => {
    e.preventDefault();


      const chooseputorpost = edit;
        let url = chooseputorpost ?  `https://desire-acb3b-default-rtdb.firebaseio.com/userdata/${editid}.json`:"https://desire-acb3b-default-rtdb.firebaseio.com/userdata.json"
         fetch(url, {
          method: chooseputorpost?'PUT': 'POST',
          body: JSON.stringify({
            Money: Money,
            Description: Description,
            Category: Category,
          }),
          headers: {
            'Content-type': 'application/json'
          }
        }).then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Uploading Failed!";
              throw new Error(errorMessage);
            });
          }
        }).then((data) => {
        fetchData()
          console.log('All OK');
           // Refresh data after successful post
        })
          .catch((err) => {
            alert(err.message);
          });
        if(chooseputorpost){ 
          setEdit(false); setEditId("")}
        setMoney('');
        setDescription('');
        setCategory('Select');
      
    }
  return (
    <div className={isDarkTheme ? styles.containerDark : styles.containerLight}>
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
        <h4>Total Expense: {totalAmount} </h4>
      {totalAmount> 10000 && <button className={styles.premiumButton} onClick={handleActivatePremium}>Active Premium</button>}
      <button onClick={handleToggleTheme}>Toggle Theme</button>
        <ul>
          {expenseArray && expenseArray.map((expense) => (
            <li key={expense.id}>
              <strong>Money:</strong> {expense.Money}, <strong>Description:</strong>{' '}
              {expense.Description}, <strong>Category:</strong> {expense.Category}
              <button onClick={() => handleEdit(expense)}>Edit</button>
              <button onClick={() => handleDelete(expense.id)}>Delete</button>
            </li>
            ))}
           {isPremium && <button className={styles.premiumButton} onClick={handleDownloadExpenses}>DownLoad</button>}
        </ul>
      </div>
    </div>
  );
};

export default Main;
