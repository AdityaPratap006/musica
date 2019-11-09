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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Error creating user', error.message);
        }

    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;