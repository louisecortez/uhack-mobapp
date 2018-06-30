import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import home from '../modules/auth/scenes/home';
import Help from '../modules/auth/scenes/Help';
import Login from '../modules/auth/scenes/Login';


import {connect} from 'react-redux';


import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";


import {actions as auth} from "../modules/auth/actions";

//const {register} = auth;
class Main extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }
    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({isReady: true, isLoggedIn});
        }));
    }
    render() {
        if(!this.state.isReady){
            return(
                <View>
                </View>
            );
        }
        return (
            <Router>
                <Scene key="root">
                    <Scene key = "notauth" initial = {!this.state.isLoggedIn}>
                        <Scene key="home" component={home} title="Home"/>
                        <Scene key="Login" component={Login} title="Login" initial/>
                    </Scene>
                    <Scene key="authed" initial = {this.state.isLoggedIn}>
                        <Scene key="Help" component={Help} title="Help"/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default connect(null, {checkLoginStatus})(Main);