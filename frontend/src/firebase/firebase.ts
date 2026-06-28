import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRZyUwuuIrJC4qHGZLF9WUJlNY7OBUd3c",
  authDomain: "leetcode-clone-d2d94.firebaseapp.com",
  projectId: "leetcode-clone-d2d94",
  storageBucket: "leetcode-clone-d2d94.firebasestorage.app",
  messagingSenderId: "834603645345",
  appId: "1:834603645345:web:ba7e6d15caaed03f31b3e0",
  measurementId: "G-S5LHJHRSQK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;