import { useEffect, useState, useRef } from 'react';
import firebase from '../firebase';
import Message from './Message';

const Channel = ({ user = null, db = null, setUniqueCount }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const dummy = useRef();

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection('messages')
        .orderBy('createdAt')
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setMessages(data);
          // scroll down when data fetched
          dummy.current.scrollIntoView({ behavior: 'smooth' });
        });
      return unsubscribe;
    }
  }, [db]);

  useEffect(() => {
    // get active user count
    countActiveUsers(messages);
  });

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (db) {
      db.collection('messages').add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
    }
    setNewMessage('');
  };

  const countActiveUsers = (messages) => {
    const activeUsers = messages.reduce((acc, message) => {
      if (!acc.includes(message.uid)) {
        acc.push(message.uid);
      }
      return acc;
    }, []);

    const numUniqueUsers = `${activeUsers.length} active users`;
    setUniqueCount(numUniqueUsers);
  };

  return (
    <div className="channel">
      <div className="channel__item">
        {messages.map((message) => (
          <div key={message.id}>
            <Message {...message} />
          </div>
        ))}
      </div>
      <span ref={dummy}></span>
      <form className="write" onSubmit={handleOnSubmit}>
        <div className="write__textarea">
          <input
            className="input__textarea"
            type="text"
            value={newMessage}
            placeholder="Write a message..."
            onChange={handleOnChange}
          />
        </div>
        <div className="write__item">
          <button
            className="btn btn-small"
            type="submit"
            disabled={!newMessage}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Channel;
