
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyDZPnDGx2rdFAhUprGZfiPhGvlkBjwrt9w",
//   authDomain: "medlista2.firebaseapp.com",
//   projectId: "medlista2",
//   storageBucket: "medlista2.appspot.com",
//   messagingSenderId: "491440866624",
//   appId: "1:491440866624:web:298f94c5566e936ad626a5",
//   measurementId: "G-EDGPQKCXG4"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDIOE1wo-gJNgGqP9kO4Z2OLU47MWHfAnw",
  authDomain: "medlista2-cebb8.firebaseapp.com",
  projectId: "medlista2-cebb8",
  storageBucket: "medlista2-cebb8.appspot.com",
  messagingSenderId: "951456512169",
  appId: "1:951456512169:web:02be837a83f9d8097991b8",
  measurementId: "G-SRNBGQD34E"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db  = getFirestore(app);

