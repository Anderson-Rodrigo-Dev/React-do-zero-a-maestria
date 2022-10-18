import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWHjjTH-Wc6sHq3wBmuU6_ybm940kQQso",
  authDomain: "mini-blog-c83d2.firebaseapp.com",
  projectId: "mini-blog-c83d2",
  storageBucket: "mini-blog-c83d2.appspot.com",
  messagingSenderId: "467289436812",
  appId: "1:467289436812:web:3dd9776593bcc6f27041a9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
