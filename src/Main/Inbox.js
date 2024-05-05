import React, { useState, useEffect } from 'react';
import OpenMail from './OpenMail';

function Inbox() {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const fetchMails = async () => {
    try {
      const response = await fetch('https://mail-box-client-5ef07-default-rtdb.firebaseio.com/emails.json');
      const fetchedMails = await response.json();
  
      if (fetchedMails) {
        const mailsArray = Object.entries(fetchedMails).map(([key, mail]) => ({ ...mail, id: key }));
        setMails(mailsArray);
        console.log(mailsArray)
        setUnreadCount(mailsArray.filter(mail =>mail.read ===false).length);
      } else {
        setMails([]);
        setUnreadCount(0);
      }
    } catch (error) {
      console.error('Error fetching mails:', error.message);
    }
  };
  

  useEffect(() => {
    fetchMails();
  }, []);


  const handleMailClick = async (mail) => {
    setSelectedMail(mail);

    if (!mail.read) {
      await markMailAsRead(mail);
    }
  };

  const handleCloseMail = () => {
    setSelectedMail(null);
  };

  const markMailAsRead = async (mail) => {
    try {
      const response = await fetch(`https://mail-box-client-5ef07-default-rtdb.firebaseio.com/emails/${mail.id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...mail, read: true })
      });

      if (response.ok) {
        const updatedMails = mails.map(m => {
          if (m.id === mail.id) {
            return { ...m, read: true };
          }
          return m;
        });
        setMails(updatedMails);
        console.log(updatedMails)
        setUnreadCount(prevCount => prevCount - 1);
      } else {
        throw new Error('Error marking mail as read');
      }
    } catch (error) {
      console.error('Error marking mail as read:', error.message);
    }
  };

  return (
    <>
      <h1>Mailbox</h1>
    <p>{unreadCount}</p>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          {mails.length === 0 ? (
            <h2>No mails to display</h2>
          ) : (
            mails.map((mail, index) => (
              <div key={index} onClick={() => handleMailClick(mail)} style={{ cursor: 'pointer', color: mail.read===true ? 'black' : 'blue' }}>
                <h2>{mail.to}</h2>
                <strong>Subject:</strong> {mail.subject}<br />
                <br />
                {mail.body}
              </div>
            ))
          )}
        </div>
        {selectedMail && (
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <OpenMail mail={selectedMail} onClose={handleCloseMail} />
          </div>
        )}
      </div>
    </>
  );
}

export default Inbox;
