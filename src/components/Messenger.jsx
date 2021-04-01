import Sidebar from './Sidebar';

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="messenger__bar">Messenger</div>
      <div className="header">
        <div className="header__left">
          <div className="header__title">Room</div>
          <div className="header__online">2 users online</div>
        </div>
        <div className="header__right">
          <div className="burger">
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
        </div>
      </div>
      <div className="chat">Chat</div>
      <div className="text">Textarea</div>
      <Sidebar />
    </div>
  );
};

export default Messenger;
