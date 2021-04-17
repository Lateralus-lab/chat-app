import { useState } from 'react';
import firebase from '../firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/img/logo.png';

const LoginForm = ({ setIsRegistered }) => {
  const [showError, setShowError] = useState('');

  const auth = firebase.auth();

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: ({ email, password }) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((signedInUser) => {
          console.log(signedInUser);
        })
        .catch((err) => {
          console.log(err);
          setShowError(err.message);
        });
    },
  });

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUser = (e) => {
    e.preventDefault();

    setIsRegistered(false);
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
            Please enter your email and password for further authorization
          </div>
        </div>
        <div className="input__group">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            values={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.email && errors.email ? (
            <div className="input__label">{errors.email}</div>
          ) : null}
        </div>
        <div className="input__group">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            values={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.password && errors.password ? (
            <div className="input__label">{errors.password}</div>
          ) : null}
        </div>
        {showError ? <div className="error">{showError}</div> : null}
        <div className="centered">
          <button className="btn" type="submit">
            Login
          </button>
          <div></div>
        </div>
        <div className="centered centered-google">
          <button className="btn btn-google" onClick={signInWithGoogle}>
            Login with Google
          </button>
        </div>
        <div className="form__user">
          Don't have an account?
          <a className="form__link" href="/" onClick={handleUser}>
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
