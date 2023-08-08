// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';


import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';



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


onAuthStateChanged( auth, user =>{
    if(user !== null){
        console.log("Signed in!")
    }
    else{
        console.log("not signed in")
    }
})


const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const email = signUpForm.email.value
    const password = signUpForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred)=>{
            console.log("User created: ", cred.user)
            signUpForm.reset()
        })
        .catch((err)=>{
            console.log(err)
        })
});