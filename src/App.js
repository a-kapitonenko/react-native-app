import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Root, Icon } from 'native-base';
import Home from './screens/Home/Home';
import Auth from './screens/Auth';
import Profile from './screens/Profile/Profile';
import Main from './screens/Main';
import SwipeList from './screens/SwipeList';
import { PageStack } from './screens/Page';
import store from './configureStore';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: `Home`,
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    },
    Profile: { screen: Profile },
    Auth: { screen: Auth },
    Main: { screen: Main },
    SwipeList: { screen: SwipeList },
    Page: { screen: PageStack }
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.name}'s Profile'`,
    //   tabBarPosition: 'bottom',
    // }),
  },
  {
    initialRouteName: 'Home',
    showIcon: true,
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <AppContainer />
      </Root>
    </Provider>
  );
};

export default App;
