import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBvsLaYdN2kuZAINWO0MLkPKnc-4eABHEs",
  authDomain: "lowhelltools.firebaseapp.com",
  databaseURL: "https://lowhelltools.firebaseio.com",
  projectId: "lowhelltools",
  storageBucket: "lowhelltools.appspot.com",
  messagingSenderId: "259625996025"
};

firebase.initializeApp(config);

export default firebase;
