import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Form from "../../components/Form";

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
      console.log("submitted");
  }

  onSuccess(user) {
      Actions.CompleteProfile({ user })
  }

  onError(error) {
      console.log("no u");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Form fields={fields}
                      showLabel={false}
                      onSubmit={this.onSubmit}
                      buttonTitle={"SIGN UP"}
                      error={this.state.error}/>
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

export default Home;