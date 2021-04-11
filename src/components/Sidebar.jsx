import Profile from './Profile';

const Sidebar = ({ showSidebar, uniqueName, uniqueAvatar }) => {
  return (
    <div className={showSidebar ? 'sidebar active' : 'sidebar'}>
      <h3>Sidebar</h3>
      <Profile uniqueName={uniqueName} uniqueAvatar={uniqueAvatar} />
    </div>
  );
};

export default Sidebar;
