// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAbv0xhNMWHrTCcDHuqgux0IGd0UEr1OI",
    authDomain: "himashray-book-bocket.firebaseapp.com",
    projectId: "himashray-book-bocket",
    storageBucket: "himashray-book-bocket.appspot.com",
    messagingSenderId: "84338235889",
    appId: "1:84338235889:web:93afd3028ae88b1b160c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;