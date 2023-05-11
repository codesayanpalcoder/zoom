import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDyU_UP2Mp6VEBzEST5TARpF2psFnnRaSo",
  authDomain: "zoom-clone-86036.firebaseapp.com",
  projectId: "zoom-clone-86036",
  storageBucket: "zoom-clone-86036.appspot.com",
  messagingSenderId: "515499453688",
  appId: "1:515499453688:web:9a4d1dba7ffcbfd5379f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
