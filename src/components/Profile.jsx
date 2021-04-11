const Profile = ({ uniqueAvatar, uniqueName }) => {
  let temp;

  const avatars = uniqueAvatar
    ? uniqueAvatar.map((avatar, i) => (
        <div className="profile__img">
          <img className="profile__avatar" key={i} src={avatar} alt="avatar" />
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

  const dataMuse = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const resp = await fetch(
      'https://api.datamuse.com/words?ml=duck&sp=b*&max=60',
      config
    );
    const data = await resp.json();

    temp = data.map((word) => word.word);
  };

  console.log(temp);
  dataMuse();

  return (
    <div className="profile">
      <div className="profile__item">{avatars}</div>
      <div className="profile__item">{names}</div>
    </div>
  );
};

export default Profile;
