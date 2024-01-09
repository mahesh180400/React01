import Expensesetitem from './Expensesetitem'
import './Expenses.css'
import Card from'../UI/Card'
import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'

const Expenses=(props)=>{
    const [filteredYear, setFilteredYear]=useState('2024');
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {filteredExpenses.map((expense)=>(
            <Expensesetitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
        ))}
          </Card>
          </div>
    
        
    )
}
export default Expenses;