import { initializeApp }  from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PRJECTID,
  storageBucket: process.env.REACT_APP_STOGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEINSENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
