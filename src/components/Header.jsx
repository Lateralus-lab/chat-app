import firebase from '../firebase';

const Header = () => {
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
        <div className="header__online">2 users online</div>
      </div>

      <div className="header__item">
        <button className="btn btn-dark" onClick={signOut}>
          Sign Out
        </button>
      </div>

      <div className="header__item">
        <div className="burger">
          <div className="burger__line"></div>
          <div className="burger__line"></div>
          <div className="burger__line"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
