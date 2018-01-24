import firebase from 'firebase'
// Initialize Firebase
  const config = {
    apiKey: "AIzaSyAec8sk6dUEuItGTqCreCr1fiktOzB6b3s",
    authDomain: "first-2a23f.firebaseapp.com",
    databaseURL: "https://first-2a23f.firebaseio.com",
    projectId: "first-2a23f",
    storageBucket: "first-2a23f.appspot.com",
    messagingSenderId: "348865961111"
  };
let fire = firebase.initializeApp(config);

export default fire;