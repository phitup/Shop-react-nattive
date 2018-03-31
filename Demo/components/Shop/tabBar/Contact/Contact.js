import React , { Component } from 'react';
import {View ,Text} from 'react-native';

export default class Contact extends Component {
  render(){
    return(
      <View style={{flex:1 , backgroundColor:'lightyellow' , justifyContent:'center', alignItems:'center'}}>
        <Text>This is Contact Component</Text>
      </View>
    );
  }
}
