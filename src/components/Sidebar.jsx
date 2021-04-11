import Profile from './Profile';

const Sidebar = ({ uniqueName, uniqueAvatar }) => {
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <Profile uniqueName={uniqueName} uniqueAvatar={uniqueAvatar} />
    </div>
  );
};

export default Sidebar;
