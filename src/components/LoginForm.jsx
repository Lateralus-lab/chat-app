import firebase from '../firebase';
import Button from './Button';
import logo from '../assets/img/logo.png';

const LoginForm = () => {
  const auth = firebase.auth();

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
        <div className="authorize">
          <div className="authorize__img">
            <img className="logo__img" alt="logo" src={logo} />
          </div>
          <h3 className="authorize__title">Authorization</h3>
          <div className="authorize__desc">
            Please enter your name and nickname for further authorization
          </div>
        </div>
        <div className="centered">
          <div>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
