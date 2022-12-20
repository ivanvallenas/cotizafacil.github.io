// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYYZG2pOQV_F82AkuU0SuCy06uscG83B4",
  authDomain: "cotizafacilv1.firebaseapp.com",
  databaseURL: "https://cotizafacilv1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cotizafacilv1",
  storageBucket: "cotizafacilv1.appspot.com",
  messagingSenderId: "715378274746",
  appId: "1:715378274746:web:08e783bbc2c5901edaed83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase,set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const db = getDatabase();




