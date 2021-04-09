import firebase from '../firebase';
import { formatRelative } from 'date-fns';
import avatar from '../assets/img/default-avatar.png';

const Message = ({ createdAt = null, text = '', uid, photoURL = '' }) => {
  const auth = firebase.auth();
  const messageClass = uid === auth.currentUser.uid ? 'sent' : '';

  return (
    <div className={`message ${messageClass}`}>
      <div className="message__img">
        {photoURL ? (
          <img
            className="message__avatar"
            src={photoURL || avatar}
            alt="Avatar"
          />
        ) : null}
      </div>
      <div className={`message__item ${messageClass}`}>
        <div className="message__text">{text}</div>
        {createdAt ? (
          <span className="message__date">
            {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
