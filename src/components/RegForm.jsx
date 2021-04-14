import { useState } from 'react';
import firebase from '../firebase';
import Authorize from './Authorize';

const RegForm = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');

  const isFormValid = (nickname, email, password, passConfirmation) => {
    if (isFormEmpty(nickname, email, password, passConfirmation)) {
      // thorow error
    } else if (isPasswordValid(password, passConfirmation)) {
      // Throw erroe
    } else {
      return true;
    }
  };

  const isFormEmpty = (nickname, email, password, passConfirmation) => {
    return (
      !nickname.length ||
      !email.length ||
      !password.length ||
      !passConfirmation.length
    );
  };

  const isPasswordValid = (password, passConfirmation) => {
    if (password.length < 6 || passConfirmation < 6) {
      return false;
    } else if (password !== passConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid(nickname, email, password, passConfirmation)) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
          console.log(createdUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <Authorize />
        <div className="input__group">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="input__group">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__group">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input__group">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={passConfirmation}
            onChange={(e) => setPassConfirmation(e.target.value)}
          />
        </div>
        <div className="centered">
          <button className="btn" type="submit">
            Register
          </button>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
