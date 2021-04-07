import Channel from './Channel';

const Messenger = ({ user, db }) => {
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
      <Channel user={user} db={db} />
      <div className="message"></div>
      <div className="sidebar"></div>
    </div>
  );
};

export default Messenger;
