import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyB5AWfD77g8GQQ3fhPEvnH4neocPEAhgI8",
    authDomain: "meuprojetomicro.firebaseapp.com",
    databaseURL: "https://meuprojetomicro.firebaseio.com",
    projectId: "meuprojetomicro",
    storageBucket: "meuprojetomicro.appspot.com",
    messagingSenderId: "334933230851"
};
var fire = firebase.initializeApp(config);

export default fire;