import { auth, database, provider } from "../../config/firebase";

import * as helpers from "./helpers";
//Register the user using email and password
export function register(data, callback) {
    const { email, password } = data;
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            const newUser = {
                yes: true,
                uid: user.uid
            }
            database.ref('users/'+user.uid).update(newUser);
            callback(true, user, null);
        })
        .catch((error) => callback(false, null, error));
}
//Sign the user in with their email and password
export function login(data, callback) {
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email, password)
        .then((user) => callback(true,user, null))
        .catch((error) => callback(false, null, error));
}

export function signOut (callback) {
    auth.signOut()
        .then(() => {
            if (callback) callback(true, null, null)
        })
        .catch((error) => {
            if (callback) callback(false, null, error)
        });
}

export function requestHelp (callback){
    helpers.getUserDetailsPromise().then((user)=>{

        var newkey = database.ref().child('request').push().key;

        var newreq = {
            lat: 0,
            long: 0,
            user: user.uid,
        }
        updates = {};
        updates['/request/'+newkey] = newreq;
        console.log(newkey);
        database.ref('request/'+newkey).on('child_added', (snapshot) =>{
            if(snapshot.key == 'callerid'){
                database.ref('request').off('child_added');
                callback();
            }
        })
        return database.ref('request/'+newkey).update(newreq);
    })
}