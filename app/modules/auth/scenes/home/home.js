import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


import Form from "../../components/Form";
import styles from "./styles";

const fields = [
    {
        key: 'fname',
        label: 'First Name',
        placeholder: 'First Name',
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text",
    },
    {
        key: 'lname',
        label: 'Last Name',
        placeholder: 'Last Name',
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text",
    },
    {
        key: 'cnumber',
        label: 'Contact Number',
        placeholder: 'Contact Number',
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text",
    },
    {
        key: 'email',
        label: "Email Address",
        placeholder: "Email Address",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "email"
    },
    {
        key: 'password',
        label: "Password",
        placeholder: "Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "password"
    },
    {
        key: 'confirm_password',
        label: "Confirm Password",
        placeholder: "Confirm Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "confirm_password"
    }
];

const error = {
  general: "",
  fname: "",
  lname: "",
  cnumber: "",
  email: "",
  password: "",
  confirm_password: ""
}
class Home extends React.Component {
  constructor() {
      super();
      this.state = {
          error: error
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
      this.onError = this.onError.bind(this);
  }

  onSubmit(data) {
      console.log(data);
  }

  onSuccess(user) {
      Actions.CompleteProfile({ user })
  }

  onError(error) {
      console.log("no u");
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.kav} behavior="padding" enabled>

        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            
                <View style={styles.titleContainer}>
                    <Image source={require('../../../../assets/images/medicall_black.png')}
                            style={styles.imageLogo}
                            resizeMode='contain'/>
                    <Text style={styles.slogan}>A tap can save a life.</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Form fields={fields}
                            showLabel={false}
                            onSubmit={this.onSubmit}
                            buttonTitle={"SIGN UP"}
                            error={this.state.error}/>
                </View>
                
            </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null)(Home);