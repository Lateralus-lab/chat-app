import User from './User';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <input className="input__search" placeholder="Search..." />
      </div>
      <User />
    </div>
  );
};

export default Sidebar;
