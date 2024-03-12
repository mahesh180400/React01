import { useContext } from "react";
import AuthContext from "../Store/authcontext";;


const Main=()=>{
    const authctx=useContext(AuthContext);
  const isLoggedIn= authctx.isLoggedIn;
  const logoutHandler=()=>{
    authctx.logout()
  }
    

    return <><h1>Le Na Bhai</h1>
   {isLoggedIn&& (<button onClick={logoutHandler}>Log Out</button>)}
   </>
};

export default Main;