import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from'../UI/Card'
import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
          </Card>
          </div>
    
        
    )
}
export default Expenses;