import { useEffect, useState } from 'react';
import firebase from './firebase';
import './assets/sass/style.scss';
// Import components
import Auth from './pages/Auth';
import Main from './pages/Main';
import Button from './components/Button';

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

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  if (initializing) return 'Loading...';

  return (
    <div className="App">
      {user ? <Main user={user} db={db} /> : <Auth />}
      <div>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </div>
  );
};

export default App;
