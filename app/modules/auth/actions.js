import * as t from './actionTypes';
import * as api from './api';
import { auth } from "../../config/firebase";

import { AsyncStorage } from 'react-native';
import Communications from 'react-native-communications';

export function requestHelp(){
    return(dispatch) => {
         api.requestHelp(() => {
            Communications.phonecall("+639193934289",true);
         });
    }
}
export function register(data, successCB, errorCB) {
    return (dispatch) => {
        api.register(data, function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGGED_IN, data: data});
                successCB(data);
            }
            else if (error) errorCB(error)
        });
    };
}

export function login(data, successCB, errorCB) {
    return (dispatch) => {
        api.login(data, function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGGED_IN, data: data});
                successCB(data);
            }else if (error) errorCB(error)
        });
    };
}


export function signOut(successCB, errorCB) {
    return (dispatch) => {
        api.signOut(function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGGED_OUT});
                successCB();
            }else if (error) errorCB(error)
        });
    };
}

export function checkLoginStatus(callback) {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            let isLoggedIn = (user !== null);
            console.log(isLoggedIn);
            if (isLoggedIn) {
                //get the user object from the Async storage
                AsyncStorage.getItem('user', (err, user) => {
                    if (user === null) isLoggedIn = false //set the loggedIn value to false
                    else dispatch({type: t.LOGGED_IN, data: JSON.parse(user)})
                    console.log(isLoggedIn);
                    callback(isLoggedIn);
                });
            } else {
                dispatch({type: t.LOGGED_OUT});
                callback(isLoggedIn);
            }
        });
    };
}