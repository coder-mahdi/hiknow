import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCyhlI9xm4twB6dwFM3vpTbodaW4nphwY",
  authDomain: "hiknow-app.firebaseapp.com",
  projectId: "hiknow-app",
  storageBucket: "hiknow-app.appspot.com",
  messagingSenderId: "638286804486",
  appId: "1:638286804486:web:e33becffecbe86af357587"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 