import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  newEmail: "",
  setNewEmail: (newEmail) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [newEmail, setNewEmail] = useState("");
  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setNewEmail(email);
    localStorage.setItem("token", token);
    console.log(email,token)
    // Set a timeout for automatic logout after 60 seconds
    setTimeout(() => {
      logoutHandler();
      console.log("TATA BYE BYE KHATAM");
    }, 600 * 1000);
  };

  const logoutHandler = () => {
    setToken(null);
    setNewEmail("");
    
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    newEmail: newEmail,
    setNewEmail: setNewEmail,
  };
  


  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
