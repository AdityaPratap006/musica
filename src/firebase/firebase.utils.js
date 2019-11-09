import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmiVvYtbsugFuJbM3EPYFPnM5jy8RpVBk",
    authDomain: "musica-d35e9.firebaseapp.com",
    databaseURL: "https://musica-d35e9.firebaseio.com",
    projectId: "musica-d35e9",
    storageBucket: "musica-d35e9.appspot.com",
    messagingSenderId: "68853528751",
    appId: "1:68853528751:web:eaad15691ae0b0327d3c5a",
    measurementId: "G-3C7QEFBW5D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;