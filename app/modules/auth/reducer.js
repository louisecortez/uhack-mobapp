
import { AsyncStorage } from 'react-native';

import * as t from './actionTypes';

let initialState = { isLoggedIn: false, user: null };
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case t.LOGGED_IN:
            //storing user information phones storage
            console.log(action.data);

            const user = action.data;
            AsyncStorage.multiSet([
                ['user', JSON.stringify(user)]
            ]);
            console.log("LOGGED IN");
            state = Object.assign({}, state, { isLoggedIn: true, user: user });
            
            return state;
        case t.LOGGED_OUT:
            //remove user information from phones storage
            let keys = ['user'];
            AsyncStorage.multiRemove(keys);
            state = Object.assign({}, state, {isLoggedIn: false, user: null });
            return state;

        default:
            return state;
    }
};


export default authReducer;