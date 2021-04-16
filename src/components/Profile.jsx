const Profile = ({ uniqueAvatar, uniqueName }) => {
  const avatars = uniqueAvatar
    ? uniqueAvatar.map((avatar) => (
        <div
          className="profile__img"
          key={Math.random().toString(36).substr(2, 9)}
        >
          <img className="profile__avatar" src={avatar} alt="avatar" />
        </div>
      ))
    : null;

  const names = uniqueName
    ? uniqueName.map((name, i) => (
        <div className="profile__name" key={i}>
          {name}
        </div>
      ))
    : null;

  return (
    <div className="profile">
      <div className="profile__item">{avatars}</div>
      <div className="profile__item">{names}</div>
    </div>
  );
};

export default Profile;
