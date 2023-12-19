import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(); // Initialize Firestore

const signUp = async (email, password, accessToken) => {
    try {
        // Check if access token already exists
        const tokenQuery = query(collection(db, 'users'), where('accessToken', '==', accessToken));
        const tokenQuerySnapshot = await getDocs(tokenQuery);
        if (!tokenQuerySnapshot.empty) {
            alert('Access token is already in use. Please choose a different one.');
            return;
        }

        // Validate password format
        if (!validatePassword(password)) {
            alert('Invalid password format. Password must be at least 6 characters long and contain at least 2 numbers.');
            return;
        }

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed up:', user);

        // Save access token to Firestore
        await addDoc(collection(db, 'users'), {
            email: email,
            password: password,
            accessToken: accessToken,
        });

        window.location.href = '/login';

        // You can redirect or perform other actions here
        }catch (error) {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration error:', errorMessage);

        if (errorCode === 'auth/invalid-email') {
            alert('Invalid email format. Please enter a valid email address.');
        } else {
            alert('Registration error: ' + errorMessage);
        }
    }
};

document.getElementById('signup').addEventListener('click', () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const accessToken = document.getElementById("accesstoken").value;

    // Call the signUp function with the provided email, password, and access token
    signUp(email, password, accessToken);
});

// Function to validate password format
function validatePassword(password) {
    // Password must be at least 6 characters long and contain at least 2 numbers
    const passwordRegex = /^(?=.*[0-9].*[0-9])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
}
document.getElementById('signup').addEventListener('click', () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const accessToken = document.getElementById("accesstoken").value;
    // Validate email format
    if (!validateEmail(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
    }

    // Call the signUp function with the provided email, password, and access token
    signUp(email, password, accessToken);
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}