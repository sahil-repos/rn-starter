import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
//the stacknavigator is a little object that decides what obj we are
// going to show at the screen at any given point of time
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    List:ListScreen,
    Image:ImageScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },

  }
);

export default createAppContainer(navigator);
