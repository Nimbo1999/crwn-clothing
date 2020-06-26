import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "Pegar a apikey no firebase",
    authDomain: "Depois inserir corretamente nos campos",
    databaseURL: "Os valores corretos de cada um.",
    projectId: "Após isso, criar um arquivo com o nome: ",
    storageBucket: "firebase.utils.js",
    messagingSenderId: "E rodar no servidor.",
    appId: "Esse arquivo é apenas um molde",
    measurementId: "Para diferenciar o valor sensivel e original desse conteúdo."
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

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

const convertCollectionsSnapshotToMap = collection => {
    const transformedCollections = collection.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } ,{});
}

export { auth, firestore, provider, singInWithGoogle, createUserProfileDocument, addCollectionAndDocuments, convertCollectionsSnapshotToMap };
export default firebase;