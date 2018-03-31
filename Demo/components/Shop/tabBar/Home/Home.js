import React , { Component } from 'react';
import {View ,Text , Button ,Image ,StyleSheet , Platform , TouchableOpacity} from 'react-native';
import OrderHistory from '../../OrderHistory/OrderHistory.js';

export default class Home extends Component {

  //   static navigationOptions = {
  //   tabBarLabel: 'Home',
  //   style: {
  //     backgroundColor: '#42a5f5',
  //   },
  //   tabBarIcon: ({tintColor }) =>(
  //     <Image source={require("../../../images/icons/home.png")}
  //       style={{width:22 , height:22}}
  //     />
  //   ),
  // }

    constructor(props){
      super(props);
    }

    static navigationOptions = {
      title: 'Authentication'
    };

  render(){
      // const { navigate } = this.props.navigation;
      return(
        <View style={{flex:1 , backgroundColor:'lightpink' , justifyContent:'center' , alignItems:'center'}}>
          <TouchableOpacity onPress={() =>
            navigate('OrderHistory')
          }>
            <Text>comeBack</Text>
          </TouchableOpacity>
        </View>
      );
  }
}
  // const { navigate } = this.props.navigation;

  // static navigationOptions = {
  //   title: 'Home',
  //   headerBackTitle: 'none',
  //  };
