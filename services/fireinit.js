import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyBcXqdDe3OSW6FJtCiuS0X1ZvB4qpRJHCk",
    authDomain: "sacred-traditions.firebaseapp.com",
    databaseURL: "https://sacred-traditions.firebaseio.com",
    projectId: "sacred-traditions",
    storageBucket: "sacred-traditions.appspot.com",
    messagingSenderId: "129000444923"
};

!firebase.apps.length ? firebase.initializeApp(config) : '';
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export const StoreDB = firebase.firestore();
export default firebase;