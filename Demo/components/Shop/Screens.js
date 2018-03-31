import React , { Component } from 'react';
import {StackNavigator , DrawerNavigator} from 'react-navigation';
import Authentication from './Authentication/Authentication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import OrderHistory from './OrderHistory/OrderHistory.js';
import Menu from './Menu.js';
import App from './App.js';
import Home from './tabBar/Home/Home.js';

export const HomeStack = StackNavigator({
  App:{
    screen: App
  },
  Authentication:{
    screen:Authentication
  },
  ChangeInfo:{
    screen: ChangeInfo
  },
  OrderHistory:{
    screen: OrderHistory
  },
  Home:{
    screen: Home
  }
});

export const SideMenu = DrawerNavigator({
  tabbar:{
    screen: HomeStack
  },
},
  {
    drawerWidth: 230,
    drawerPosition: 'left',
    contentComponent: props => <Menu />
  }
);

 export default SideMenu;
