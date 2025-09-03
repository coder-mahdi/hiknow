import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCyhlI9xm4twB6dwFM3vpTbodaW4nphwY",
  authDomain: "hiknow-app.firebaseapp.com",
  projectId: "hiknow-app",
  storageBucket: "hiknow-app.appspot.com",
  messagingSenderId: "638286804486",
  appId: "1:638286804486:web:e33becffecbe86af357587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Enable persistence for offline support
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code === 'failed-precondition') {
//     console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
//   } else if (err.code === 'unimplemented') {
//     console.log('The current browser does not support persistence.');
//   }
// });

export { auth, db, storage }; 