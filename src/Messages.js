import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';


import { getAuth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging.js";
const firebaseConfig = {
    apiKey: "AIzaSyAy4ZcpC1dFu31INK637buxdc1trjStJIA",
    authDomain: "gaming-tournament-18.firebaseapp.com",
    projectId: "gaming-tournament-18",
    storageBucket: "gaming-tournament-18.appspot.com",
    messagingSenderId: "394670526321",
    appId: "1:394670526321:web:41f04781fc629cda6070d0",
    measurementId: "G-KLCG88XHHK"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const messages = getMessaging();

messages.requestPermission()
  .then(()=>{
    console.log("Permission granted")
  })
  .catch(()=>{
    console.log("Permission Denied")
  })