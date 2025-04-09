import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA85ERPotGYmuQnTnBnMZbodbemQJKDubk",
  authDomain: "my-react-app-e095e.firebaseapp.com",
  projectId: "my-react-app-e095e",
  storageBucket: "my-react-app-e095e.firebasestorage.app",
  messagingSenderId: "1094362725087",
  appId: "1:1094362725087:web:1d399e952170efdb2c476a",
  measurementId: "G-W4TDS0VVN4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);