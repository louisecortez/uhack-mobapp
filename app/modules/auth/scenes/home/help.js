import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from 'react-native';

class Help extends React.Component {
  constructor() {
      super();
      this.state = {
      }

      this.onHelp = this.onHelp.bind(this);
  }

  onHelp() {
      console.log("i'm dying");
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(null)(Help);