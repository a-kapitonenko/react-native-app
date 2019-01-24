import React from 'react';
import { StyleSheet, View, Platform, Button } from 'react-native';
import { types } from '../../constants/auth';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

class Home extends React.Component {
  render() {
    console.log(Platform.OS);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Sign Up"
          onPress={() =>
            this.props.navigation.push('Auth', {
              type: types.SIGN_UP,
            })}
        />
         <Button
          title="Sign In"
          onPress={() =>
            this.props.navigation.push('Auth', {
              type: types.SIGN_IN,
            })}
        />
      </View>
    );
  }
};

export default Home;
