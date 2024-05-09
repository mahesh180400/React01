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
        setUnreadCount(mailsArray.filter(mail => mail.read === false).length);
        console.log('calling in Every 2 seconds')
        
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
    const intervalId = setInterval(fetchMails, 2000); 

    return () => clearInterval(intervalId);
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
        setUnreadCount(prevCount => prevCount - 1);
      } else {
        throw new Error('Error marking mail as read');
      }
    } catch (error) {
      console.error('Error marking mail as read:', error.message);
    }
  };

  return (
    <div className="container">
      <h1>Mailbox</h1>
      <div className="row">
        <div className="col-md-">
          {mails.length === 0 ? (
            <h2>No mails to display</h2>
          ) : (
            mails.map((mail, index) => (
              <div key={index} onClick={() => handleMailClick(mail)} style={{ cursor: 'pointer', color: mail.read ? 'black' : 'blue' }}>
              <div> <h5>Received Mail From : {mail.to}</h5>
              
              <p>Time:  {mail.time}</p>
               </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-3">
          <div className="position-fixed top-0 end-0 p-3">
            <div className="bg-primary text-white p-2 rounded">
              Unread Mails: {unreadCount}
            </div>
          </div>
        </div>
      </div>
      {selectedMail && (
        <div className="row">
          <div className="col-md-12">
            <OpenMail mail={selectedMail} onClose={handleCloseMail} fetchMails={fetchMails} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Inbox;
