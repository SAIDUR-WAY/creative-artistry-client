// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDq7K5SpZEuSb1lihEq46UkPiW-cSgsrs",
  authDomain: "creative-artistry-client.firebaseapp.com",
  projectId: "creative-artistry-client",
  storageBucket: "creative-artistry-client.appspot.com",
  messagingSenderId: "524282783680",
  appId: "1:524282783680:web:7d8e45897ce4b3bd6c8a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;