import * as firebase from 'firebase';
import * as firebaseconstants from "./constants"
var config = {
    apiKey: firebaseconstants.FIREBASE_API_KEY,
    authDomain: firebaseconstants.FIREBASE_AUTH_DOMAIN,
    databaseURL: firebaseconstants.FIREBASE_DATABASE_URL,
    projectId: firebaseconstants.FIREBASE_PROJECT_ID,
    storageBucket: firebaseconstants.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: firebaseconstants.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);


export const database = firebase.database();
export const auth = firebase.auth();