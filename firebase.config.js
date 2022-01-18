// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB6cemaqHL02hDVGQBx1pA8woQ8KsoUDCQ",
    authDomain: "twitter-clone-7278f.firebaseapp.com",
    projectId: "twitter-clone-7278f",
    storageBucket: "twitter-clone-7278f.appspot.com",
    messagingSenderId: "669477058545",
    appId: "1:669477058545:web:8b3d4774f6699ac8ae7650"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };