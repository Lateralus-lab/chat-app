import { formatRelative } from 'date-fns';
import avatar from '../assets/img/default-avatar.png';

const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  return (
    <div>
      {photoURL ? (
        <img src={photoURL || avatar} alt="Avatar" width={45} height={45} />
      ) : null}
      {displayName ? <p>{displayName}</p> : null}
      {createdAt ? (
        <span>
          {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
        </span>
      ) : null}
      <p>{text}</p>
    </div>
  );
};

export default Message;
