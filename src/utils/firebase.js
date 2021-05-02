import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYfzhevvq-dpMlVCOxlUh4xG30P8SpLzQ",
  authDomain: "hotelsys-da043.firebaseapp.com",
  projectId: "hotelsys-da043",
  storageBucket: "hotelsys-da043.appspot.com",
  messagingSenderId: "1046740619603",
  appId: "1:1046740619603:web:0cb1576bbfddf5084b11a6",
  measurementId: "G-5G5VEDFK3X",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
