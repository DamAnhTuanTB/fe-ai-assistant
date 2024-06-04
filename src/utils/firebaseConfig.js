// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w8xOJbd7kz2YVACp2jj5yujh8xLeLb0",
  authDomain: "ai-assistant-423909.firebaseapp.com",
  projectId: "ai-assistant-423909",
  storageBucket: "ai-assistant-423909.appspot.com",
  messagingSenderId: "555164701826",
  appId: "1:555164701826:web:33556f7c34fd29b165509b",
  measurementId: "G-FXMERC3H7F",
};

let analytics;

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics };
