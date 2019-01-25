import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, View, Button } from 'react-native';
import { Spinner } from 'native-base'
import { types } from '../../constants/auth';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

class Home extends React.Component {
  state = {
    isFetching: false,
    success: false,
  }

  componentDidMount() {
    this.setState({ isFetching: true });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isFetching: false,
          success: true,
        });
        
        this.props.navigation.push('Profile');
      } else {
        this.setState({
          isFetching: false,
          success: false
        });
      }
    });
  }

  render() {
    const { isFetching, success } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {isFetching || success
          ? <Spinner />
          : (
            <React.Fragment>
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
            </React.Fragment>
          )
        }
      </View>
    );
  }
};

export default Home;
