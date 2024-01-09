import Expensesetitem from './Expensesetitem'
import './Expenses.css'
import Card from'../UI/Card'
import React from 'react'

const Expenses=(props)=>{
    return (
        <div>
        <Card className="expenses">
        {props.items.map((expense)=>(
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