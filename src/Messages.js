import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging.js";

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

const messaging = getMessaging();
getToken(messaging, {vapidKey: "BIAe4vqaeQUuTGvRS4CIMS2kI1hf4pPwY07UZESAviGFJs7e7csmjU_esdTaxKwIKDeqTRNyu8Kv7xZb5wf-snY"})

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');}
    else {
        console.log("There has been an error")
    }})
};


getToken(messaging, { vapidKey: "BIAe4vqaeQUuTGvRS4CIMS2kI1hf4pPwY07UZESAviGFJs7e7csmjU_esdTaxKwIKDeqTRNyu8Kv7xZb5wf-snY" }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log('Token is here ')
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
});


onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
