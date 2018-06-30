import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import Communications from 'react-native-communications';

import styles from './styles';
import {actions as auth} from "../../index"

const {requestHelp} = auth;

class Help extends React.Component {
  constructor() {
      super();
      this.state = {
          loading: false
      }

      this.onHelp = this.onHelp.bind(this);
  }

  componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({isReady: true, isLoggedIn});
        }));
    }

  onHelp() {
      console.log("i'm dying");
      this.props.requestHelp();
      //Communications.phonecall("+639193934289",true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi, user!</Text>
        <Button
            title="SEND HELP"
            color="#ff5b84"
            onPress={this.onHelp}
        />

        {this.state.loading ?
            <View
                style = {styles.loadings}>
                <Image
                    style = {styles.imgs}
                    source = {require('../../../../assets/materials/load.gif')}
                />
                
                <Text
                    style = {styles.callertxt}
                >Waiting for Ambulance</Text>
            </View>
            :
            <View></View>
        }
        
      </View>
    );
  }
}

export default connect(null, {requestHelp})(Help);