import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCY1N78EV7QwWdWFKv4rkwRhbBl2OwUVkU",
  authDomain: "college-alert-app-8409e.firebaseapp.com",
  projectId: "college-alert-app-8409e",
  storageBucket: "college-alert-app-8409e.firebasestorage.app",
  messagingSenderId: "289107693851",
  appId: "1:289107693851:web:9f10cbabc33983f89b83be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
