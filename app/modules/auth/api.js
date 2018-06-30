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
        callback();
        return database.ref('request/'+newkey).update(newreq);
    })
}

export function checkHelp(requestedCB, doneCB, nothingCB){
    var isnt = false;
    var user;
    helpers.getUserDetailsPromise().then((usert) => {
        user = usert;
        return database.ref('request').orderByChild('user').equalTo(user.uid).once('value').then((snapshot) => {
            return snapshot.val();
        })
        
    }).then((request) => {
        if(request != null) {
            console.log("RIP");
            database.ref('response').on('child_added', (snapshot) => {
                console.log("HEHE");
                if(snapshot != null){
                    var val = snapshot.val();
                    console.log(val);
                    if(val != null && val.user == user.uid){
                        console.log("CLEAN");
                        doneCB();
                    }
                }
            })
            requestedCB();
        }
        else{
            nothingCB();
        }
        
    }, (error) => {
        console.error(error);
    })
    
}