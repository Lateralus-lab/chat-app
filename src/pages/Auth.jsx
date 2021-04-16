import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegForm from '../components/RegForm';

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="auth">
      {isRegistered ? (
        <LoginForm setIsRegistered={setIsRegistered} />
      ) : (
        <RegForm setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default Auth;
