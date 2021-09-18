import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDUTRbX1pxp-9QgByEGheilWrj8ltS88fU",
    authDomain: "tinder-clone-d1e66.firebaseapp.com",
    projectId: "tinder-clone-d1e66",
    storageBucket: "tinder-clone-d1e66.appspot.com",
    messagingSenderId: "284718503007",
    appId: "1:284718503007:web:829b66cfbd60eab1c9f7ea",
    measurementId: "G-12T6GQZW67"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export default db