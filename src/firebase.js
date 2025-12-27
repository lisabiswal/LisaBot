
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPPhhYMew1PG5SmsYdmWKXHhv-Ox2hWQE",
  authDomain: "lisabot-web-app.firebaseapp.com",
  projectId: "lisabot-web-app",
  storageBucket: "lisabot-web-app.firebasestorage.app",
  messagingSenderId: "995376588862",
  appId: "1:995376588862:web:c6e5e3457d1e71f9c1c96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);