import React from 'react';
import * as firebase from 'firebase';
import { types } from '../../constants/auth';
import Form from './Form';

class Auth extends React.Component {
  state = {
    isFetching: false,
    error: '',
    success: false,
  }

  fetchAuth = (func) => {
    return async function(values) {
      try {
        this.setState({ isFetching: true });

        const response = await func(values.email, values.password);

        if (response) {
          this.setState({
            isFetching: false,
            success: true,
          });
        }
      } catch (error) {
        const message = error.message;

        this.setState({
          isFetching: false,
          error: message,
          success: false,
        });
      }
    }
  }

  // async signIn(values) {
  //   try {
  //     const response = await firebase.auth().signInWithEmailAndPassword(values.email, values.password);

  //     console.log(response);
  //   } catch (error) {
  //     const type = error.code;
  //     const message = error.message;

  //     alert(`Error Type: ${type}\nError Message: ${message}`);
  //   }
  // }

  render() {
    const { isFetching, error, success } = this.state;
    console.log(isFetching, error, success);
    const { navigation } = this.props;
    const type = navigation.getParam('type', types.SIGN_UP);
    const label = type === types.SIGN_IN ? 'Sign In' : 'Sign Up';
    const onSubmit = type === types.SIGN_IN
      ? this.fetchAuth(firebase.auth().signInWithEmailAndPassword) 
      : this.fetchAuth(firebase.auth().createUserWithEmailAndPassword);

    return (
      <Form label={label} onSubmit={onSubmit} />
    );
  }
};

export default Auth;
