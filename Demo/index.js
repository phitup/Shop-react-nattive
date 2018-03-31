import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
// import {App,ABC} from './App';
//import {Navigator} from 'react-native-deprecated-custom-components';
//import PropTypes from 'prop-types';
//import ClickTime from './components/ClickTime.js';
import Login from './components/Login.js';
//import KhoaPhamDemo from './components/KhoaPhamDemo.js';
// import App from './components/Shop/Screens.js';

console.disableYellowBox = true;

class index extends Component{
    render(){
        return (
          <Login />
        );
    }
}

AppRegistry.registerComponent('Demo', () => index);
