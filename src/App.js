import { useEffect, useState } from 'react';
import firebase from './firebase';
import './assets/sass/style.scss';
// Import components
import Auth from './pages/Auth';
import Main from './pages/Main';

const App = () => {
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return unsubscribe;
  }, []); // eslint-disable-line

  if (initializing) return 'Loading...';

  return (
    <div className="App">{user ? <Main user={user} db={db} /> : <Auth />}</div>
  );
};

export default App;
