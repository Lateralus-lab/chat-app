import LoginForm from '../components/LoginForm';

const Auth = ({ setIsLoggedIn }) => {
  return (
    <div className="auth">
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Auth;
