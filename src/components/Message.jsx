import firebase from '../firebase';
import { formatRelative } from 'date-fns';
import avatar from '../assets/img/default-avatar.png';
import { useEffect, useRef, useState } from 'react';

const Message = ({
  createdAt = null,
  displayName = '',
  text = '',
  uid,
  photoURL = '',
}) => {
  const auth = firebase.auth();
  const messageClass = uid === auth.currentUser.uid ? 'sent' : '';

  const useHoover = () => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
      ref.current.addEventListener('mouseenter', enter);
      ref.current.addEventListener('mouseleave', leave);
    }, [ref]);

    return [ref, hovered];
  };

  const [ref, hovered] = useHoover();

  return (
    <div className={`message ${messageClass}`} ref={ref}>
      {hovered ? <div className="message__name">{displayName}</div> : null}
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
