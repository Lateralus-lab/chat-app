const Sidebar = ({ user }) => {
  const { displayName, photoURL } = user;

  return (
    <div className="sidebar">
      <div>{displayName}</div>
      <img src={photoURL} alt="Avatar" />
    </div>
  );
};

export default Sidebar;
