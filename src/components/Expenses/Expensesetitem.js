import ExpenseDate from './ExpensesDate';

import Card from '../UI/Card';
import './Expensesetitem.css';
import React,{useState}from 'react';
const Expensesetitem=(props)=>{
    const [title,settitle]=useState(props.title);
    const [amount,setamount]=useState(props.amount);
    const clickexpense=()=>{
        setamount(100)
        console.log("ITs 100 price")
    }
    const clickhandler=()=>{
        settitle("UPDATED")
        console.log('clicked !')
    }
   return (
    <li>
       <Card className="expense-item">
       <ExpenseDate date={props.date} />
        <div className="expense-item_description">
            <h2>{title}</h2>
            <div className="expense-item_price">${amount}</div>
        </div>
        <button onClick={clickexpense}>Add Expense</button>
        <button onClick={clickhandler}>Click to Delete</button>

        </Card>
        </li>
       
    );
}

export default Expensesetitem;