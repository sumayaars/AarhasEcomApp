import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvTmk7s5vec6xxl88N-10HEe9SoCIS8SI",
  authDomain: "ecommerce-firebase-7054b.firebaseapp.com",
  projectId: "ecommerce-firebase-7054b",
  storageBucket: "ecommerce-firebase-7054b.appspot.com",
  messagingSenderId: "1082779971066",
  appId: "1:1082779971066:web:c352a3a94a22fd734b4843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);