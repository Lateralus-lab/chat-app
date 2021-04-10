const Sidebar = ({ uniqueName }) => {
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <div>
        {uniqueName.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
