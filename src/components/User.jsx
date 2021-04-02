import userImage from '../assets/img/humberto-chavez-5JSkFTXHZvI-unsplash.png';

const User = () => {
  return (
    <>
      <div className="user">
        <div className="user__photo">
          <img className="user__img" src={userImage} alt="user__img" />
        </div>
        <div className="user__item">
          <div className="user__name">Eli Krizevski</div>
          <div className="user__message">Hello!</div>
        </div>
      </div>

      <div className="user">
        <div className="user__photo">
          <img className="user__img" src={userImage} alt="user__img" />
        </div>
        <div className="user__item">
          <div className="user__name">Elon Musk</div>
          <div className="user__message">How are you?</div>
        </div>
      </div>
    </>
  );
};

export default User;
