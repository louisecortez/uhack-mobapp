import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


import login from "../../actions";


class MapView extends React.Component {
  constructor() {
      super();
      this.state = {
          error: error
      }

      this.onSubmit = this.onSubmit.bind(this);
  }


  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}


export default connect(null, {login})(MapView);