// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC1LTsWCr28TVfDvlC6NdmAd7Q8khu4Xs",
  authDomain: "cursoreact-7328d.firebaseapp.com",
  projectId: "cursoreact-7328d",
  storageBucket: "cursoreact-7328d.appspot.com",
  messagingSenderId: "848155721977",
  appId: "1:848155721977:web:a0754fe07154ddf60fa228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)