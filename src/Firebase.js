import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaZ9sa4APZLVPZZz-jjDv38kaBfODNAMw",
    authDomain: "fb-clone-fd81b.firebaseapp.com",
    projectId: "fb-clone-fd81b",
    storageBucket: "fb-clone-fd81b.appspot.com",
    messagingSenderId: "172415518037",
    appId: "1:172415518037:web:cc029be5a1eb3da9d65bdc",
    measurementId: "G-T7TLL79CMW",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
