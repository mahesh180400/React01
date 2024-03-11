import React, { useState } from "react";
import styles from './ProfileEdit.module.css';
const ProfileEdit = () => {
  const [update, setUpdate] = useState(false);
  const [name, setname] = useState('');
  const [profile, setprofile] = useState('');

  const edit = (e) => {
    e.preventDefault();
    setUpdate((prevstate) => !prevstate);
  };

  const updatereques = (e) => {
    const tokenold=localStorage.getItem('token')
    console.log(tokenold)
    e.preventDefault();
    let url='https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck'
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
        idToken:tokenold,
            displayName:name,
            photourl:profile,
            returnSecureToken:true
        }),
        headers:{
            'Content-type':'application.json'
        }
       }).then((res)=>{
        if(res.ok){
          return res.json();
    
        }else{
            return res.json().then ((data)=>{
             let errorMessage="Authentication FAiled!";
            throw new Error(errorMessage)
            })
         }
       }).then((data)=>{
        console.log('All OK Profile')
       })
       .catch((err)=>{
        alert(err.message)
       })
    console.log(name, profile);
    setname("")
    setprofile("")
  };

  return (
    <>
      {!update && (
        <div className={styles.container}>
          <h2>Welcome to Expense Tracker!!!</h2>
          <p>
            Your profile is incomplete{" "}
            <button className={styles.button} onClick={edit}>
              Complete now
            </button>
          </p>
        </div>
      )}
      {update && (
        <div className={styles.container}>
          <h2>Winners never quit, Quitters never win.</h2>
          <button className={`${styles.button} ${styles.cancel}`} onClick={edit}>
            Cancel
          </button>
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className={styles.input}
          />
          <label>Profile Photo URL:</label>
          <input
            type="text"
            value={profile}
            onChange={(e) => setprofile(e.target.value)}
            className={styles.input}
          />
          <button className={styles.button} onClick={updatereques}>
            Update
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileEdit;