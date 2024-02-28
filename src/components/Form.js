import { useState } from "react";
import './Form.module.css'
const Form=(props)=>{
    const [title,settitle]=useState('');
    const [optext,setoptext]=useState('');
    const [date,setdate]=useState('');
    const submitform=(event)=>{
        event.preventDefault()
      const newData={
        title,
        optext,
        date
       };
       props.addmoviesHandler(newData)
       console.log(newData,'Lala aya hai');
       setdate('');
       settitle('');
       setoptext('');
    }
    return (<>
    <form onSubmit={submitform}>
        <label>Title :</label>
        <input type='text' value={title}  onChange={(e)=> settitle(e.target.value)}></input><br></br>
        <label>Opening Text :</label>
        <input value={optext}  onChange={(e)=> setoptext(e.target.value)}></input><br></br>
        <label>Release Date</label>
        <input value={date}  onChange={(e)=> setdate(e.target.value)}></input><br/>
        <button type='submit'>Add </button>
    </form>
    </>)
};
export default Form;