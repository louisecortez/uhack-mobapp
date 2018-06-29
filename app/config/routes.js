import React, {Component} from 'react';
//import { View, AsyncStorage } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import home from '../modules/auth/scenes/home';


import {connect} from 'react-redux';

class Main extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={home} title="Home" initial/>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default connect(null)(Main);