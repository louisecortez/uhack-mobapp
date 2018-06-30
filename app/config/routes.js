import React, {Component} from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import home from '../modules/auth/scenes/home';
import Help from '../modules/auth/scenes/Help';
import Login from '../modules/auth/scenes/Login';

import {connect} from 'react-redux';


import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";
import Map       from '../modules/map/scenes/Map/Map';



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
                <View><Text>Loading...</Text></View>
            );
        }
        return (
            <Router>
                <Scene key="root">
                    <Scene key = "notauth" initial = {!this.state.isLoggedIn}>
                        <Scene key="home" component={home} title="Home" initial hideNavBar/>
                        <Scene key="Login" component={Login} title="Login" hideNavBar/>
                    </Scene>
                    <Scene key="authed" initial = {this.state.isLoggedIn} hideNavBar>
                        <Scene key="Help" component={Help} title="Help" hideNavBar/>

                        <Scene key = 'mapInnerTab' title = "Map"
                                component={Map} hideNavBar>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default connect(null, {checkLoginStatus})(Main);