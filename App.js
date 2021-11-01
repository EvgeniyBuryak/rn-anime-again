import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/home-screens/home-screens.view';

const navigator = createStackNavigator(
  {
    'Home': HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Test'
    }
  }
);

export default createAppContainer(navigator);