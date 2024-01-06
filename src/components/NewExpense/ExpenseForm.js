import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const [userInput, setUserInput]=useState({
        enterdTitle:'',
        enterdAmount:'',
        enterdDate:''
    });
   
    
    const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enterdTitle:event.target.value
    })
    }

    const AmountChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enterdAmount:event.target.value
        })
    }

    const DateChangeHandler=(event)=>{
       setUserInput({
        ...userInput,
        enterdDate:event.target.value
       })
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                     <label>Title</label>
                     <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;

