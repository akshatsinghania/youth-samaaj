import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCuPHnZDkIUsMpjYoqvWouk4gWVkiyXw24",
  authDomain: "highschoolproject-a0354.firebaseapp.com",
  databaseURL: "https://highschoolproject-a0354-default-rtdb.firebaseio.com",
  projectId: "highschoolproject-a0354",
  storageBucket: "highschoolproject-a0354.appspot.com",
  messagingSenderId: "423894918810",
  appId: "1:423894918810:web:a26092a2f66e4c4106e123",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const DB = firebase.database().ref();
export const auth = firebase.auth();
