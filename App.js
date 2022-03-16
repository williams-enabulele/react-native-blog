import React from 'react';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/indexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs',
  
    headerStyle: {
      backgroundColor: 'transparent',
      height: 100  
    },
    //headerShown: true,
    //headerTransparent: true,
    headerTitleAlign: 'center'


  }
})


const App =  createAppContainer(navigator);
export default () => {
  return <Provider>
      <App/>
  </Provider>

}; 