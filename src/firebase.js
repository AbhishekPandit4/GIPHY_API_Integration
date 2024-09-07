import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW8LFRFpyoTb5JsQpEojzTyHRXCcHv_yY",
  authDomain: "react-authentication-6872c.firebaseapp.com",
  projectId: "react-authentication-6872c",
  storageBucket: "react-authentication-6872c.appspot.com",
  messagingSenderId: "801226198005",
  appId: "1:801226198005:web:8e85ed89935bdfa029eebc",
  measurementId: "G-JH12SJR71X",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

 const database = getAuth(app)
export { app, auth, database };
