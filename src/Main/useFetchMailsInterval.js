import {  useEffect } from 'react';

const useFetchMailsInterval = (fetchFunction, interval) => {
  useEffect(() => {
    const fetchMails = async () => {
      try {
        await fetchFunction();
      } catch (error) {
        console.error('Error fetching mails:', error.message);
      }
    };

    fetchMails(); 

    const intervalId = setInterval(fetchMails, interval);

    return () => clearInterval(intervalId);
  }, [fetchFunction, interval]);
};

export default useFetchMailsInterval;
