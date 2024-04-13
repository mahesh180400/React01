import { useState } from "react";
const Greeting=()=>{
const [changeText,setchangeText]=useState(false)
const changeTextHandler=()=>{
    setchangeText(true);
}
    return (
        <div>
        <h2>Hello Sir/Mam</h2>
        {!changeText && <p>It's good to see you!</p>}
        {changeText && <p>Done</p>}
        <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
};
export default Greeting;