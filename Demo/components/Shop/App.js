import React , { Component } from 'react';
import {
  View , Text ,Image , Dimensions ,TouchableOpacity ,Button
} from 'react-native';
//import {StackNavigator , TabNavigator} from 'react-navigation';
import Cart from './tabBar/Cart/Cart.js';
import Contact from './tabBar/Contact/Contact.js';
import Home from './tabBar/Home/Home.js';
import Search from './tabBar/Search/Search.js';
import Menu from './Menu.js';
import TabNavigator from 'react-native-tab-navigator';
import Screens from './Screens.js';

const { height } = Dimensions.get('window');

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedTab: 'Home',
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: <Button title="Info" onPress={() => { navigation.navigate('DrawerOpen') }} />,
    headerBackTitle: null,
  });

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1}}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            renderIcon={() => <Image source={require('../images/icons/home.png')} style={{width:22 , height:22 }}/>}
            renderSelectedIcon={() => <Image source={require('../images/icons/home_green.png')} style={{width:22, height:22}}/>}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'Home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Cart"
            renderIcon={() => <Image source={require('../images/icons/cart_black.png')} style={{width:22 , height:22 }}/>}
            renderSelectedIcon={() => <Image source={require('../images/icons/cart_green.png')} style={{width:22, height:22}}/>}
            onPress={() => this.setState({ selectedTab: 'Cart' })}>
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            renderIcon={() => <Image source={require('../images/icons/search_black.png')} style={{width:22 , height:22 }}/>}
            renderSelectedIcon={() => <Image source={require('../images/icons/search_green.png')} style={{width:22, height:22}}/>}
            onPress={() => this.setState({ selectedTab: 'Search' })}>
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            renderIcon={() => <Image source={require('../images/icons/contact_black.png')} style={{width:22 , height:22 }}/>}
            renderSelectedIcon={() => <Image source={require('../images/icons/contact_green.png')} style={{width:22, height:22}}/>}
            onPress={() => this.setState({ selectedTab: 'Contact' })}>
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
