import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


import Form from "../../components/Form";

import {actions as auth} from "../../index"

import styles from './styles';
const {login} = auth;

const fields = [
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
];

const error = {
  general: "",
  email: "",
  password: "",
  confirm_password: ""
}
class Login extends React.Component {
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
      this.setState({error: error});
      this.props.login(data, this.onSuccess, this.onError);
  }

  onSuccess(user) {
      Actions.Help();
  }


  onError(error) {
      
        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }
        this.setState({error: errObj});
  }

  render() {
    return (
      <View style={styles.container}>
        <Form fields={fields}
                      showLabel={false}
                      onSubmit={this.onSubmit}
                      buttonTitle={"Login"}
                      error={this.state.error}/>
      </View>
    );
  }
}


export default connect(null, {login})(Login);