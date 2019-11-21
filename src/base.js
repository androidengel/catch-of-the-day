import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBr1U1Wd40f81otBfH_c9I1sqG2RDPV3P8",
  authDomain: "catch-of-the-day-andrew-engel.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-andrew-engel.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
