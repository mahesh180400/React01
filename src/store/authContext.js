import React, { useState } from "react";
const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider=(props)=>{
    const initialtoken=localStorage.getItem('token');
    const [token,settoken]=useState(initialtoken);
    const userIsLoggedIn= !!token;

    const loginHandler=(token)=>{
        settoken(token)
        localStorage.setItem('token',token);
        setTimeout(()=>{
            logoutHandler();
            console.log('TATA BYE BYE KHATAM')
        },600*1000);
        console.log('Login Function is CAlled!')
    };

    const logoutHandler=()=>{
        console.log('logout called')
        settoken(null);
        localStorage.removeItem('token');
        
    };
    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return( <AuthContext.Provider value={contextValue}> 
        {props.children}
    </AuthContext.Provider>)
};
export default AuthContext;