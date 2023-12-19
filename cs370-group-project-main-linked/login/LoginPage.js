import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgpdTMFEUBRGi05GzhKGDWT96Ll3GV6Oc",
  authDomain: "projectpulse-3ffca.firebaseapp.com",
  projectId: "projectpulse-3ffca",
  storageBucket: "projectpulse-3ffca.appspot.com",
  messagingSenderId: "382665570195",
  appId: "1:382665570195:web:7727b91b6aaf9a82a51a66",
  measurementId: "G-NEMCWE12RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to sign in with email and password
const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect or perform other actions here
            window.location.href = '/profile';
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Authentication error:', errorMessage);
            alert('Invalid credentials. Please try again.');
        });
};

document.getElementById('submit').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Attempt to sign in with Firebase using entered email and password
        await signIn(email, password);
    } catch (error) {
        // Handle errors from signIn function (Firebase authentication)
        console.error('Authentication error:', error.message);
        alert('Invalid credentials. Please try again.');
    }
});
