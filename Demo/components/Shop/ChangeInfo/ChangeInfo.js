import React , { Component } from 'react';
import {View , Text ,TouchableOpacity} from 'react-native';

export default class ChangeInfo extends Component {
  render(){
    return(
      <View style={{flex:1 , backgroundColor:'lightpink' , justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
