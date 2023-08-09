import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';


import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

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

onAuthStateChanged( auth, user =>{
    if (user && user.email) {
        const profile = document.querySelector('.profile');
        profile.innerText = user.email;
    } else {
        console.log("not signed in or no email available");
    }
    
})