import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/HomeScreen'
import SoundScreen from './screens/SoundScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Sounds: SoundScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
