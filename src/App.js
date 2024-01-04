

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
  return (
    
  <div>
    <h2>Lets get Started</h2>
    <Expenses items={expenses}/>
    </div>);
}

export default App;
