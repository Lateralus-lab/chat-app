import firebase from '../firebase';

const Header = ({ showSidebar, setShowSidebar, uniqueCount }) => {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__title">Room</div>
        <div className="header__online">{uniqueCount}</div>
      </div>

      <div className="header__item">
        <div className="header__item header__item-left">
          <button className="btn btn-dark" onClick={signOut}>
            Sign out
          </button>
        </div>

        <div className="header__item header__item-right">
          <div
            className={showSidebar ? 'burger active' : 'burger'}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
