import { useState } from 'react';
// Components
import Header from './Header';
import Channel from './Channel';
import Sidebar from './Sidebar';

const Messenger = ({ user, db }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="messenger">
      <div className="messenger__bar">Messenger</div>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Channel user={user} db={db} />
      {showSidebar ? <Sidebar /> : null}
    </div>
  );
};

export default Messenger;
