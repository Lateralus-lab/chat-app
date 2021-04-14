import { useState } from 'react';
import firebase from '../firebase';
import Authorize from './Authorize';

const LoginForm = () => {
  const auth = firebase.auth();

  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <Authorize />
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
          <div>
            <button className="btn btn-dark" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
