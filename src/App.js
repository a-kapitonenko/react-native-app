import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { StyleSheet, Button } from 'react-native';
import { Root } from 'native-base';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import FooterContainer from './screens/Footer/FooterContainer';
import store from './configureStore';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <AppContainer />
        <FooterContainer />
      </Root>
    </Provider>
  );
};

export default App;
