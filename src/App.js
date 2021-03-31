import { useState } from 'react';
import './assets/sass/style.scss';
// Import components
import Auth from './pages/Auth';
import Main from './pages/Main';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? <Main /> : <Auth setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
};

export default App;
