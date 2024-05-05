// OpenMail.js
import React from 'react';
import './OpenMail.css'; // Import custom CSS for styling

function OpenMail({ mail, onClose }) {
  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{mail.subject}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p><strong>From:</strong> {mail.to}</p>
            <p><strong>Subject:</strong> {mail.subject}</p>
            <p><strong>Body:</strong> {mail.body}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenMail;
