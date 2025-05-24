import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-Zlb6_YYnuY4eAkeVE6RMuvizqpFuJiA",
  authDomain: "meu-projeto1812.firebaseapp.com",
  projectId: "meu-projeto1812",
  storageBucket: "meu-projeto1812.firebasestorage.app",
  messagingSenderId: "242638960643",
  appId: "1:242638960643:web:0f57f9c727834530ccb636",
  measurementId: "G-M8R78G98P3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);