import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Root } from 'native-base';
import Home from './screens/Home/Home';
import Auth from './screens/Auth';
import Profile from './screens/Profile/Profile';
import store from './configureStore';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Auth: { screen: Auth },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
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
