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

  signUp = (values) => {
    this.setState({ isFetching: true });

    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        this.setState({
          isFetching: false,
          error: '',
          success: true,
        });
      })
      .catch(error => {
        const message = error.message;

        this.setState({
          isFetching: false,
          error: message,
          success: false,
        });
      });
  }

  signIn = (values) => {
    this.setState({ isFetching: true });

    firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        this.setState({
          isFetching: false,
          error: '',
          success: true,
        });
      })
      .catch(error => {
        const message = error.message;

        this.setState({
          isFetching: false,
          error: message,
          success: false,
        });
      });
  }

  render() {
    const { isFetching, error, success } = this.state;
    const { navigation } = this.props;
    const type = navigation.getParam('type', types.SIGN_UP);
    const label = type === types.SIGN_IN ? 'Sign In' : 'Sign Up';
    const onSubmit = type === types.SIGN_IN ? this.signIn : this.signUp;

    console.log(`IS FETCHING: ${isFetching}, ERROR: ${error}, SUCCESS: ${success}`);

    return (
      <Form label={label} onSubmit={onSubmit} />
    );
  }
};

export default Auth;
