import { useState } from "react";

const Forgot=()=>{
    const [oldemail,setoldemail]=useState('')
   
    const Verifyhandle=(e)=>{
        e.preventDefault();
        let url="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC6JbZDqf63EMa4jOcDc2zdGFv4f9ok1ck"
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
            requestType:"PASSWORD_RESET",
            email:oldemail
            }),
           }).then((res)=>{
            if(res.ok){
              return res.json();
        
            }else{
                return res.json().then ((data)=>{
                 let errorMessage="Verification Email FAiled!";
                throw new Error(errorMessage)
                })
             }
           }).then((data)=>{
            console.log('Verified Email Successfully',data.email)
           })
           .catch((err)=>{
            alert(err.message)
           })
    }



    return <>
    <h2>Forgot Password</h2>
    <input
        type="email"
        required
        value={oldemail}
        onChange={(e) => setoldemail(e.target.value)} 
      ></input>
     <button onClick={Verifyhandle}>
        Verify Email
        </button>
    
    </>
};
export default Forgot