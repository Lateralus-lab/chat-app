import Header from './Header';
import Channel from './Channel';

const Messenger = ({ user, db }) => {
  return (
    <div className="messenger">
      <div className="messenger__bar">Messenger</div>
      <Header />
      <Channel user={user} db={db} />
      <div className="sidebar"></div>
    </div>
  );
};

export default Messenger;
