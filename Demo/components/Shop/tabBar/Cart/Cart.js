import React , { Component } from 'react';
import {View , Text , Button ,StyleSheet} from 'react-native';

export default class Cart extends Component {



  render(){
    return(
      <View style={styles.container}></View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
// const { params } = this.props.navigation.state;
// const { goBack } = this.props.navigation;

// static navigationOptions = ({ navigation }) => ({
//   title: 'Cart',
//   headerTintColor: 'red',
//   headerRight: <Button title="Info" />
// });
