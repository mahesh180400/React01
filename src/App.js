import NewExpense from './components/NewExpense/NewExpense';
import React from 'react'
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses=[
    {
      id:'el',
      title:'Toilet Paper',
      amount:94.12,
      date:new Date(2024,7,14)
    },
    {
      id:'el2',
      title:'Washing Machine',
      amount:954.12,
      date:new Date(2014,7,14)
    }, {
      id:'el3',
      title:'Car INsurance',
      amount:924.12,
      date:new Date(2024,5,14)
    }, {
      id:'el4',
      title:'A4 Paper',
      amount:94.12,
      date:new Date(2024,7,14)
    }
  ]
  const addExpenseHandler=()=>{
    console.log('In App.js');
    console.log(expenses);
  }
  return (
    
  <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
    ) ;
}

export default App;
