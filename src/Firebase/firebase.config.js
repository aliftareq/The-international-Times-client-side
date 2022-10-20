// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbwZ8yrTnKikHQE3QWrP1v1PmZRTr-qKA",
    authDomain: "the-international-times.firebaseapp.com",
    projectId: "the-international-times",
    storageBucket: "the-international-times.appspot.com",
    messagingSenderId: "934086514745",
    appId: "1:934086514745:web:48094ab2ad61cbe79615e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;