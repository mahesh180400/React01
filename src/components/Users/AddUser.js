import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/Error.Modal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const onsubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please Enter valid name and age (non-empty value).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please Enter valid age (>0).',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const UserNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorChangeHandle = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorChangeHandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onsubmitHandler}>
          <label className="label">UserName</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={UserNameChangeHandler}
          />
          <label className="label">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
