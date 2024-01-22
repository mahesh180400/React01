

import './Userlist.css';
const Userlist = (props) => {
  const deleteUser = (userrandomid,userId) => {
    props.onDeleteUser(userrandomid,userId);
  };

  return (
    <div className='users'>
      <h1>Products :</h1>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <label>Id:</label> {user.Id},{' '}
            <label>Price:</label> {user.price},{' '}
            <label>Name:</label> {user.name}
            <button type='button' onClick={() => deleteUser(user.id,user.Id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Total Price:- {props.total}</h1>
    </div>
  );
};

export default Userlist;
