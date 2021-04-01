import Sidebar from './Sidebar';

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="messenger__bar">Messenger</div>
      <div className="messenger__header">
        <div className="header">
          <div className="header__item">
            <div className="header__title">Room</div>
            <div className="header__online">2 users online</div>
          </div>
          <div className="burger">
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
        </div>
      </div>
      <div className="messenger__chat">Chat</div>
      <div className="messenger__textarea">Textarea</div>
      <div className="messenger__sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Messenger;
