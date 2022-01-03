// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALDpzesqjpJZkBV-B5THcRr5Xv4FojN-g',
  authDomain: 'uber-clone-next-dbd2e.firebaseapp.com',
  projectId: 'uber-clone-next-dbd2e',
  storageBucket: 'uber-clone-next-dbd2e.appspot.com',
  messagingSenderId: '223449241800',
  appId: '1:223449241800:web:d9df48efba99dd3cf8adfd',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
