import { auth, database, provider } from "../../config/firebase";

export function getUserDetailsPromise () {
    var userAuthDetails = auth.currentUser;
    console.log(userAuthDetails.uid);
    return database.ref('users/' + userAuthDetails.uid).once("value").then(function(snapshot) {
        return snapshot.val();
    }, function(error) {
        console.error(error);
    });

}