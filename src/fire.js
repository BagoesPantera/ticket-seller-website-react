import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCTDhSeN67AKonRXH1IpTMNqJPhmT2VVv4",
    authDomain: "aksport-c22ec.firebaseapp.com",
    projectId: "aksport-c22ec",
    storageBucket: "aksport-c22ec.appspot.com",
    messagingSenderId: "727184162198",
    appId: "1:727184162198:web:1c0a21d634715f61ab31b7",
    measurementId: "G-WC9JECE42D"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;
  