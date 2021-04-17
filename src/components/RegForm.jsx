import { useState } from 'react';
import firebase from '../firebase';
import md5 from 'md5';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/img/logo.png';

const RegForm = ({ setIsRegistered }) => {
  const [showError, setShowError] = useState('');

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Password confirmation is required'),
    }),
    onSubmit: ({ username, email, password }) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
          createdUser.user.updateProfile({
            displayName: username,
            photoURL: `http://gravatar.com/avatar/${md5(
              createdUser.user.email
            )}?d=identicon`,
          });
        })
        .catch((err) => {
          console.log(err);
          setShowError(err.message);
        });
    },
  });

  const handleUser = (e) => {
    e.preventDefault();

    setIsRegistered(true);
  };

  return (
    <div className="wrapper">
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="authorize">
          <div className="authorize__img">
            <img className="logo__img" alt="logo" src={logo} />
          </div>
          <h3 className="authorize__title">Registration</h3>
          <div className="authorize__desc">
            Please enter your details to register a new user and for further
            authorization
          </div>
        </div>
        <div className="input__group">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            values={values.usename}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.username && errors.username ? (
            <div className="input__label">{errors.username}</div>
          ) : null}
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
        <div className="input__group">
          <input
            className="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            values={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.confirmPassword && errors.confirmPassword ? (
            <div className="input__label">{errors.confirmPassword}</div>
          ) : null}
        </div>
        {showError ? <div className="error">{showError}</div> : null}
        <div className="centered">
          <button className="btn" type="submit">
            Register
          </button>
          <div></div>
        </div>
        <div className="form__user">
          Already a user?
          <a className="form__link" href="/" onClick={handleUser}>
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
