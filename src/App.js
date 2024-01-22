import React, { useState,useEffect } from 'react';
import NewForm from './Form/NewForm';
import Userlist from './Form/Userlist';

function App() {
  const [userList, setUserList] = useState([])
  const [total,setTotal]=useState(0);

  useEffect(() => {
    let newTotalPrice = 0;
  
    for (const user of userList) {
      const d=+user.price;
      newTotalPrice=newTotalPrice+d
    }
    setTotal(newTotalPrice);
  }, [userList]);
  


  const addUserHandler = (Id, price, name) => {
    setUserList((prevUserList) => [
      ...prevUserList,
      { Id,price,name,id: Math.random().toString(),},
    ]);
    const obj={
      Id,
      price,
      name,
    }
    let data=JSON.stringify(obj)
    localStorage.setItem(Id,data)
  };


  const deleteUserHandler = (userrandomid,userId) => {
    localStorage.removeItem(userId)
    setUserList((prevUserList) => prevUserList.filter((user) => user.id !== userrandomid));
    
   
  };


  return (
    <div>
      <h1>New Form</h1>
       <NewForm
        onAddUser={addUserHandler}
      />
      <Userlist
        users={userList}
        onDeleteUser={deleteUserHandler}
        total={total}
      />
    </div>
  );
}

export default App;
