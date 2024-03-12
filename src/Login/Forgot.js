import React, { useState } from "react";
import styles from './Forgot.module.css'; 
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [oldemail, setOldEmail] = useState('');
  const navigate = useNavigate();

  const Verifyhandle = (e) => {
    e.preventDefault();
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=YOUR_API_KEY"; // Replace with your API key

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: oldemail
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Verification Email Failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log('Verified Email Successfully', data.email);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={styles.ForgotPasswordContainer}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        className={styles.ForgotPasswordInput}
        required
        value={oldemail}
        onChange={(e) => setOldEmail(e.target.value)}
      ></input>
      <button className={styles.ForgotPasswordButton} onClick={Verifyhandle}>
        Verify Email
      </button>
      <p>
        Already a User?{" "}
        <span className={styles.LoginLink} onClick={() => navigate("/")}>
          Log In
        </span>
      </p>
    </div>
  );
};

export default Forgot;
