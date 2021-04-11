import { useState } from 'react';
// Components
import Header from './Header';
import Channel from './Channel';
import Sidebar from './Sidebar';
import Mobbar from './Mobbar';

const Messenger = ({ user, db }) => {
  const [uniqueCount, setUniqueCount] = useState('');
  const [uniqueAvatar, setUniqueAvatar] = useState('');
  const [uniqueName, setUniqueName] = useState('');
  const [showMobbar, setShowMobbar] = useState(false);

  return (
    <div className="messenger">
      <div className="messenger__bar">Messenger</div>
      <Header
        uniqueCount={uniqueCount}
        showMobbar={showMobbar}
        setShowMobbar={setShowMobbar}
      />
      <Channel
        setUniqueCount={setUniqueCount}
        setUniqueAvatar={setUniqueAvatar}
        setUniqueName={setUniqueName}
        user={user}
        db={db}
      />
      <Sidebar uniqueAvatar={uniqueAvatar} uniqueName={uniqueName} />
      {showMobbar ? <Mobbar showMobbar={showMobbar} /> : null}
    </div>
  );
};

export default Messenger;
