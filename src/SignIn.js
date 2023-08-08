import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';


import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



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



const signIn = document.querySelector("#signIn")
signIn.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signIn['signIn-email'].value
    const password = signIn['signIn-password'].value
    signInWithEmailAndPassword(auth, email, password)
        .then(cred => {
            console.log(cred.user)
            window.location.href = "./Main_Page.html";
        })
});



onAuthStateChanged( auth, user =>{
    if(user !== null){
        console.log("Signed in!")
    }
    else{
        console.log("not signed in")
    }
})

