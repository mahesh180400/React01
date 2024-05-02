import React, { useState, useEffect } from 'react';

function Inbox() {
  const [mails, setMails] = useState([]);

  const fetchMails = async () => {
    try {
      // Make GET request to fetch mails
      const response = await fetch('https://mail-box-client-5ef07-default-rtdb.firebaseio.com/emails.json');
      const fetchedMails = await response.json();

      // Convert fetchedMails object to an array of mail objects
      const mailsArray = Object.values(fetchedMails || {});

      setMails(mailsArray);
    } catch (error) {
      console.error('Error fetching mails:', error.message);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []); // Run only once on component mount

  // Render component
  return (
    <>
      <h1>Mailbox</h1>
      {mails.length === 0 ? (
        <h2>No mails to display</h2>
      ) : (
        mails.map((mail, index) => (
          <div key={index}>
            <strong>From:</strong> {mail.to}<br />
            <strong>Subject:</strong> {mail.subject}<br />
            <strong>body:</strong> {mail.body}<br />
            <br />
            {mail.content}
          </div>
        ))
      )}
    </>
  );
}

export default Inbox;
