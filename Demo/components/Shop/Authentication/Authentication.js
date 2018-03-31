import React , { Component } from 'react';
import {View , Text , TouchableOpacity} from 'react-native';
import OrderHistory from '../OrderHistory/OrderHistory.js';

export default class Menu extends Component {

  static navigationOptions = {
    title: 'Authentication'
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1 , backgroundColor:'lightpink' , justifyContent:'center' , alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{navigate('OrderHistory')}}>
          <Text>comeBack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
