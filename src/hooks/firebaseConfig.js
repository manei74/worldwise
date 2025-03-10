import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHHuSPqZgyc4bSxsUlB58D589NWySvBC4",
  authDomain: "worldwise-55b84.firebaseapp.com",
  projectId: "worldwise-55b84",
  storageBucket: "worldwise-55b84.firebasestorage.app",
  messagingSenderId: "926592990040",
  appId: "1:926592990040:web:a95f7970f57ab41fde432d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
