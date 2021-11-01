import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnRW7NUmLByP3kh22429-klIA-7UJFEQI",
  authDomain: "twitter-clone-b14a6.firebaseapp.com",
  projectId: "twitter-clone-b14a6",
  storageBucket: "twitter-clone-b14a6.appspot.com",
  messagingSenderId: "192025013694",
  appId: "1:192025013694:web:d49dc6fe4c06beb2fe1def",
  measurementId: "G-C05NSZ0S0P",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();

export default db;
