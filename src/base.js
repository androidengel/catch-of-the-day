import Rebase from 're-base';
import firebase from 'firebase';
import env from './environment';

const firebaseApp = firebase.initializeApp({
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
