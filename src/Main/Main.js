import React, { useState } from 'react';
import './Main.css';

function Main() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();

  try {
    // Simulate sending email data to backend server
    const response = await fetch('https://mail-box-client-5ef07-default-rtdb.firebaseio.com/emails.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      // Store email in sender's sentbox
      const sentEmails = JSON.parse(localStorage.getItem('sentEmails')) || [];
      sentEmails.push(emailData);
      localStorage.setItem('sentEmails', JSON.stringify(sentEmails));

      // Store email in receiver's inbox (for demonstration, we'll assume receiver's email is stored in 'to' field)
      const receivedEmails = JSON.parse(localStorage.getItem(emailData.to)) || [];
      receivedEmails.push(emailData);
      localStorage.setItem(emailData.to, JSON.stringify(receivedEmails));

      // Reset form
      setEmailData({
        to: '',
        subject: '',
        body: ''
      });

      alert('Email sent successfully');
    } else {
      throw new Error('Error sending email');
    }
  } catch (error) {
    console.error(error);
    alert('Error sending email');
  }
  };
  return (
    <div className="container">
      <h2>Compose Email</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="to">To:</label>
        <input
          type="email"
          id="to"
          name="to"
          value={emailData.to}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
          required
        />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          rows="5"
          value={emailData.body}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default Main;
