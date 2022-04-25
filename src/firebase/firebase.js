import "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYwBfCUoKKNTxANbmwb8UJiN1Dzng4kVo",
  authDomain: "nftanalytics-f61bf.firebaseapp.com",
  projectId: "nftanalytics-f61bf",
  storageBucket: "nftanalytics-f61bf.appspot.com",
  messagingSenderId: "1047486789857",
  appId: "1:1047486789857:web:7bd3c165781b81eff55fa0",
  measurementId: "G-Y4VHS57H43"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// Get a list of comments from your database
