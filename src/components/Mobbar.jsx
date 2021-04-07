const Mobbar = ({ showMobbar }) => {
  return (
    <div className={showMobbar ? 'mobbar active' : 'mobbar'}>
      <h3>Mobbar</h3>
    </div>
  );
};

export default Mobbar;
