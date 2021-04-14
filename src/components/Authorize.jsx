import logo from '../assets/img/logo.png';

const Authorize = () => {
  return (
    <div className="authorize">
      <div className="authorize__img">
        <img className="logo__img" alt="logo" src={logo} />
      </div>
      <h3 className="authorize__title">Authorization</h3>
      <div className="authorize__desc">
        Please enter your name and nickname for further authorization
      </div>
    </div>
  );
};

export default Authorize;
