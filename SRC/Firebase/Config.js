// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAjMBJssbZ1kFulmk5IjV4d8-q0Uf2Dys",
  authDomain: "sahayfi.firebaseapp.com",
  projectId: "sahayfi",
  storageBucket: "sahayfi.appspot.com",
  messagingSenderId: "935053842651",
  appId: "1:935053842651:web:27bb7c226b9b7641b694fe",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
