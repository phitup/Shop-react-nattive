import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity ,
 } from 'react-native';
import PropTypes from 'prop-types';
import styles from './components/styles/style.js';
import login from './components/Login';


export default class ClickTime extends Component{
    render(){
        return(
            <login />
        );
    }
}