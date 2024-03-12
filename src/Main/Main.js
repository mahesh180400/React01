import { useContext, useState } from 'react';
import styles from './Main.module.css';
import AuthContext from '../Store/authcontext';

const Main = () => {
  const [money, setMoney] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Select');
  const [expenses, setExpenses] = useState([]);

  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  const logoutHandler = () => {
    authctx.logout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (money && description && category !== 'Select') {
      const newExpense = {
        money,
        description,
        category,
      };
      setExpenses([...expenses, newExpense]);
      setMoney('');
      setDescription('');
      setCategory('Select');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className={styles.container}>
      {isLoggedIn && <button onClick={logoutHandler} className={styles.logoutButton}>Log Out</button>}
      <form onSubmit={handleSubmit}>
        <h2>Expense Form</h2>
        <strong>Money:</strong>
        <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} />
        <strong>Description:</strong>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <strong>Category:</strong>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
          {expenses.map((expense, index) => (
            <li key={index}>
              <strong>Money:</strong> {expense.money}, <strong>Description:</strong>{' '}
              {expense.description}, <strong>Category:</strong> {expense.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
