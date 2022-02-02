import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyChKHRio-ANCZqCPlv1DOEdLrCwGnnx86o",
  authDomain: "basic-chat-app-85871.firebaseapp.com",
  databaseURL: "https://basic-chat-app-85871-default-rtdb.firebaseio.com",
  projectId: "basic-chat-app-85871",
  storageBucket: "basic-chat-app-85871.appspot.com",
  messagingSenderId: "536250361422",
  appId: "1:536250361422:web:023a80cd4301c05cfd451f",
  measurementId: "G-F7GVWM4M2J"
};

firebase.initializeApp(firebaseConfig);

export default firebase;