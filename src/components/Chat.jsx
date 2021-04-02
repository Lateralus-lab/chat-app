import userImage from '../assets/img/humberto-chavez-5JSkFTXHZvI-unsplash.png';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__recived">
        <div className="chat__photo">
          <img className="chat__img" src={userImage} alt="chat__img" />
        </div>
        <div className="chat__item">
          <div className="chat__message chat__message-recived">
            Hello Recived
            <span className="chat__time">12:37</span>
          </div>
        </div>
      </div>

      <div className="chat__sent">
        <div className="chat__item">
          <div className="chat__message chat__message-sent">
            Hello Sent
            <span className="chat__time">12:38</span>
          </div>
        </div>
        <div className="chat__photo">
          <img className="chat__img" src={userImage} alt="chat__img" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
