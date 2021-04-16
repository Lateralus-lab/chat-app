import { useState } from 'react';
// Components
import Header from './Header';
import Channel from './Channel';
import Sidebar from './Sidebar';

const Messenger = ({ user, db }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [uniqueCount, setUniqueCount] = useState('');
  const [uniqueAvatar, setUniqueAvatar] = useState('');
  const [uniqueName, setUniqueName] = useState('');

  return (
    <div className="messenger">
      <div className="messenger__bar">Messenger</div>
      <Header
        uniqueCount={uniqueCount}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Channel
        setUniqueCount={setUniqueCount}
        setUniqueAvatar={setUniqueAvatar}
        setUniqueName={setUniqueName}
        user={user}
        db={db}
      />
      <Sidebar
        showSidebar={showSidebar}
        uniqueAvatar={uniqueAvatar}
        uniqueName={uniqueName}
      />
    </div>
  );
};

export default Messenger;
