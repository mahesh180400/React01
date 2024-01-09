import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [enterdTitle, setEnterdTitle]=useState("");
    const [enterdAmount, setEnterdAmount]=useState("");
    const [enterdDate, setEnterdDate]=useState("");
    
    const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value)
    console.log(enterdTitle)
    }

    const AmountChangeHandler=(event)=>{
        setEnterdAmount(event.target.value)
        console.log(enterdAmount)
    }

    const DateChangeHandler=(event)=>{
        setEnterdDate(event.target.value)
        console.log(enterdDate)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date(enterdDate)
        }
        
    props.onSaveExpenseData(expenseData)
        setEnterdTitle("");
        setEnterdAmount("");
        setEnterdDate("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                     <label>Title</label>
                     <input type='text' value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enterdAmount}min='0.01' step='0.01' onChange={AmountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enterdDate} min="01-01-2019" max="01-01-2028" onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;

