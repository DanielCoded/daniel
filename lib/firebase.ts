import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcuHt3oA32sfdxQDgJkY2s0G8BXuImwtI",
  authDomain: "daniel-oche-ochowechi.firebaseapp.com",
  projectId: "daniel-oche-ochowechi",
  storageBucket: "daniel-oche-ochowechi.firebasestorage.app",
  messagingSenderId: "59203996596",
  appId: "1:59203996596:web:cc5ccb1a7fe34e13b4c0e1",
  measurementId: "G-89E9V996QV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

