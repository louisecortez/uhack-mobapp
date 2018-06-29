import React, {Component} from 'react';
//import { View, AsyncStorage } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import home from '../modules/auth/scenes/home';


import {connect} from 'react-redux';

import { checkLoginStatus } from "../modules/auth/actions";

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
        if (!this.state.isReady)
            return;
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={home} title="Home" initial hideNavBar/>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default connect(null, {checkLoginStatus})(Main);