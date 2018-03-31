import React , { Component } from 'react';
import {View , Text ,TouchableOpacity} from 'react-native';
import Screens from '../Screens.js';

export default class Interface extends Component {

  static navigationOptions = {
    title: 'Home',
    headerBackTitle: null ,
    tabBarLabel: 'Home',

  }

  render(){
    const { navigate } = this.props.navigation;

    return(
        <View>
        {}
        </View>
    );
  }
}
