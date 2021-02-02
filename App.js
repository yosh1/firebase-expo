import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1tZvO93jUxBBlrb3Ut5YxzRKuJRtH8I4",
  authDomain: "fir-expo-31d8f.firebaseapp.com",
  projectId: "fir-expo-31d8f",
  storageBucket: "fir-expo-31d8f.appspot.com",
  messagingSenderId: "665823794679",
  appId: "1:665823794679:web:9abf04662bce0bda220af2",
};
firebase.initializeApp(firebaseConfig);

// import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signUpUser = (email, password) => {
    try {
      if(this.state.password.length < 6){
        alert("plz enter atleast 6 char.");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
        <form>
          <div>
            <label>Email</label>
            <TextInput
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </div>
          <div>
            <label>Pass</label>
            <TextInput
              autoCapitalize="none"
              type="password"
              onChangeText={(password) => this.setState({ password })}
            />
          </div>
        </form>
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
