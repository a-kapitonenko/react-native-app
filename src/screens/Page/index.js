import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Edit from './Edit';
import Settings from './Settings';

class PageScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Go to edit"
          onPress={() => this.props.navigation.navigate('Edit')}
        />
        <Button
          title="Go to settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

export const PageStack = createStackNavigator(
  {
    Page: { screen: PageScreen },
    Edit: { screen: Edit },
    Settings: { screen: Settings },
  }
); 

export default PageScreen;
