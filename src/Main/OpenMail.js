import React from 'react';
import './OpenMail.css';

function OpenMail({ mail, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Received from : {mail.to}</h5>
          <button className="close" onClick={handleClose}>X</button>
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
