import React, { useState } from 'react';
import OpenMail from './OpenMail';
import styles from './Inbox.module.css';
import useFetchMailsInterval from './useFetchMailsInterval';

function Inbox() {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchMails = async () => {
    const response = await fetch('https://mail-box-client-5ef07-default-rtdb.firebaseio.com/emails.json');
    const fetchedMails = await response.json();

    if (fetchedMails) {
      const mailsArray = Object.entries(fetchedMails).map(([key, mail]) => ({ ...mail, id: key }));
      setMails(mailsArray);
      setUnreadCount(mailsArray.filter(mail => !mail.read).length);
      console.log('calling in Every 2 seconds');
    } else {
      setMails([]);
      setUnreadCount(0);
    }
  };

  useFetchMailsInterval(fetchMails, 2000);

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
    <div className={styles.container}>
      <h1 className={styles.myHeader}>Mailbox </h1>
      <p className={styles.unreadCount}>Unread Mails = {unreadCount}</p>

      <div className="row">
        <div className="col-md-9">
          {mails.length === 0 ? (
            <h2>No mails to display</h2>
          ) : (
            mails.map((mail, index) => (
              <div key={index} onClick={() => handleMailClick(mail)} className={`${styles.mailItem} p-3 border-bottom ${mail.read ? styles.read : ''}`}>
                <h5>Received Mail From: {mail.to} {mail.read === false ? <button style={{ borderRadius: '80%', width: '30px', height: '35px', backgroundColor: '#0000cd', border: 'none' }}></button> : ""}</h5>
                <p>Time: {mail.time}</p>
              </div>
            ))
          )}
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
