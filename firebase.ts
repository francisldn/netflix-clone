// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDybz7udVpWSFQwayBFC9BVkN4IVjEGqos",
  authDomain: "netflix-clone-b6e0c.firebaseapp.com",
  projectId: "netflix-clone-b6e0c",
  storageBucket: "netflix-clone-b6e0c.appspot.com",
  messagingSenderId: "544396408644",
  appId: "1:544396408644:web:232517a8437a2223d9c911",
  measurementId: "G-YKQ4N3L908"
};

// check if the app is initialised
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }