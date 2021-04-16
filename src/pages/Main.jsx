import Messenger from '../components/Messenger';

const Main = ({ user, db }) => {
  return (
    <div className="main">
      <Messenger user={user} db={db} />
    </div>
  );
};

export default Main;
