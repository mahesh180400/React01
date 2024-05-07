
import React from 'react';
import { useEffect } from "react";




function OpenMail({ mail, onClose,fetchMails }) {
  const handleClose = () => {
    onClose();
  };

  useEffect(()=>{import ('./OpenMail.css')},[])

  const handleDelete=()=>{
    const {id}=mail;
    fetch(`https://mail-box-client-5ef07-default-rtdb.firebaseio.com/emails/${id}.json`, {
      method:'DELETE',
  }).then(response=>{
    if(response.ok){
      console.log("Mail Delete Successfully!")
      onClose();
      fetchMails()
    }else{
      console.error('Failed to delete mail',response.statusText)
    }
  })
  .catch(error=>{
    console.error("Error deleting mail",error)
  })
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Received from : {mail.to}</h5>
         
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div className="modal-body">
        <p>Date & Time: {mail.time}</p>
          <p>To: {mail.to}</p>
          <p>Subject: {mail.subject}</p>
          <p>Body: {mail.body}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default OpenMail;
