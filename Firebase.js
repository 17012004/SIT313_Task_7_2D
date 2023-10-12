import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD4c6fojo7__c_oUeUkhyYekdDnh0zGX4",
  authDomain: "sevenpointtwod.firebaseapp.com",
  projectId: "sevenpointtwod",
  storageBucket: "sevenpointtwod.appspot.com",
  messagingSenderId: "1004259439015",
  appId: "1:1004259439015:web:c176f0209a09c7dd06c682",
  measurementId: "G-9ZGMHSC9P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const vansh= getFirestore(app);
export const storage = getStorage(app);