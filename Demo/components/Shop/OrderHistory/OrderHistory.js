import React , { Component } from 'react';
import {View , Text ,TouchableOpacity} from 'react-native';

export default class OrderHistory extends Component {
  render(){
    return(
      <View style={{flex:1 , backgroundColor:'lightgreen' , justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=> { this.props.navigation.goBack()}}>
          <Text>ComeBack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
