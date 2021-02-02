import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';

import firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen, 
  LoginScreen: LoginScreen,
  DashboardScreen:DashboardScreen
});



const AppNavigator = createAppContainer(AppSwitchNavigator);