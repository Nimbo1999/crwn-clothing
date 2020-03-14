import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPZFPWDsc_MvM9yjWAJ-fCiqc0uLjp-c8",
    authDomain: "crwn-clothing-6f4af.firebaseapp.com",
    databaseURL: "https://crwn-clothing-6f4af.firebaseio.com",
    projectId: "crwn-clothing-6f4af",
    storageBucket: "crwn-clothing-6f4af.appspot.com",
    messagingSenderId: "99854026577",
    appId: "1:99854026577:web:3371dee80b9411d9247570",
    measurementId: "G-5M18RRQF85"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const singInWithGoogle = () => auth.signInWithPopup(provider);

const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userRef;
}

export { auth, firestore, provider, singInWithGoogle, createUserProfileDocument };
export default firebase;