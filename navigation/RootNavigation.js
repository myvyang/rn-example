import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeTabNavigator from './HomeTabNavigator';
import FontScreen from '../screens/FontScreen';
import Youtube from '../screens/Youtube';

const Home = createStackNavigator({
    HomeTabNavigator,
    FontScreen,
    Youtube,
})

export default createAppContainer(Home);
