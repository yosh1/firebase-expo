import React, { Component } from "react";
import {TextInput, Text, View, StatusBar } from "react-native";

import firebase from "firebase";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("plz enter atleast 6 char.");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <View>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
            <Text>Email</Text>
            <TextInput
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
            <Text>Pass</Text>
            <TextInput
              autoCapitalize="none"
              type="password"
              onChangeText={(password) => this.setState({ password })}
            />
        <button
          onClick={() => this.loginUser(this.state.email, this.state.password)}
        >
          Login
        </button>
        <button
          onClick={() => this.signUpUser(this.state.email, this.state.password)}
        >
          Signup
        </button>
      </View>
    );
  }
}
