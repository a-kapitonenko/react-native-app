import React from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
      color: 'blue'
    },
    headerTitle: () => <View><Text style={{color: 'blue', fontSize: 20}}>Back</Text></View>,
  };

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  } 
}

export default SettingsScreen;
