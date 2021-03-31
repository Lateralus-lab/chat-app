import { useState } from 'react';
import logo from '../assets/img/logo.png';

const LoginForm = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
  };

  return (
    <div className="wrapper">
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="authorize">
          <div className="authorize__img">
            <img className="logo__img" alt="logo" src={logo} />
          </div>
          <h3 className="authorize__title">Authorization</h3>
          <div className="authorize__desc">
            Please enter your name and nickname for further authorization
          </div>
        </div>
        <div className="input__group">
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input__group">
          <input
            className="input"
            type="text"
            placeholder="Nickname"
            onChange={(e) => setNickName(e.target.value)}
          />
        </div>
        <div className="centered">
          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
