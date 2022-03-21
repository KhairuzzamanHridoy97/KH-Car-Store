import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initiaLizeFirebase=()=>{
    initializeApp(firebaseConfig)
};

export default initiaLizeFirebase;