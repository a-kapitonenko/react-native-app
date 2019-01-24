import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
});

const RegistrationForm = (props) => {
  let secondInput = null;
  var user = firebase.auth().currentUser;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          alert(`Error Type: ${errorCode}\nError Message: ${errorMessage}`);
        });
      }}
    >
      {props => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log('USER SIGNED');
          } else {
            console.log('USER NOT SIGNED');
          }
        });
        
        return (
          <Form style={styles.container}>
            <Item>
              <Input
                autoFocus
                placeholder="Email"
                returnKeyType={"next"}
                textContentType="emailAddress"
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                onSubmitEditing={() => {
                  secondInput._root.focus();
                }}
                blurOnSubmit={false}
                value={props.values.email}
              />
            </Item>
            <Item>
              <Input
                ref={(input) => { secondInput = input; }}
                secureTextEntry
                textContentType="password"
                placeholder="Password"
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                value={props.values.password}
              />
            </Item>
            <Button
              style={styles.button}
              full
              onPress={props.handleSubmit}
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        )
      }}
    </Formik>
  );
};

export default RegistrationForm;
