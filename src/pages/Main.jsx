import { useState } from 'react';
import Messenger from '../components/Messenger';
import Channel from '../components/Channel';

const Main = ({ user, db }) => {
  const tempDispay = useState(true);

  return (
    <div className="main">
      {tempDispay ? (
        <Messenger user={user} db={db} />
      ) : (
        <Channel user={user} db={db} />
      )}
    </div>
  );
};

export default Main;
