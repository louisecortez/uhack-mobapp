import React, {Component} from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import home from '../modules/auth/scenes/home';
import store from '../redux/store'


import {connect} from 'react-redux';


import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";
import Map       from '../modules/map/scenes/Map/Map';


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
            return (
                <View><Text>Loading...</Text></View>
            );
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={home} title="Home"  hideNavBar/>
                    {/* <Scene key="map"
                                   title='Map' //icon={TabIcon}
                                //    tabs
                                //    tabBarStyle={{backgroundColor: '#fff'}}
                                //    activeBackgroundColor = '#ddd'
                                   tabBarPosition='bottom'
                                showLabel={false} hideNavBar initial/> */}
                    <Scene key = 'mapInnerTab' title = "Map"
                            component={Map} initial hideNavBar>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default connect(null, {checkLoginStatus})(Main);