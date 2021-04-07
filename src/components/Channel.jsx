import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Message from './Message';

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection('messages')
        .orderBy('createdAt')
        .limit(25)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
        });
      return unsubscribe;
    }
  }, [db]);

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

  return (
    <div className="channel">
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Message {...message} />
          </li>
        ))}
      </ul>
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
