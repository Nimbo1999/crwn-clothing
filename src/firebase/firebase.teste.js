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

export { auth, firestore, provider, singInWithGoogle };
export default firebase;