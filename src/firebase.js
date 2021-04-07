import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDPb9IRFo-eDEW8e5l3vR41SS9dnriSKE4',
  authDomain: 'messenger-1e1f9.firebaseapp.com',
  projectId: 'messenger-1e1f9',
  storageBucket: 'messenger-1e1f9.appspot.com',
  messagingSenderId: '55449889465',
  appId: '1:55449889465:web:a118f8b83304bbfae88968',
  measurementId: 'G-YE6M44KZDF',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
