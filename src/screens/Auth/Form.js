import React from 'react';
import { Formik } from 'formik';
import { Form, Item, Input, Button, Text } from 'native-base';
import styles from './styles';

const AuthForm = ({
  label,
  onSubmit,
}) => {
  let secondInput = null;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {props => {
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
              <Text>{label}</Text>
            </Button>
          </Form>
        )
      }}
    </Formik>
  );
};

export default AuthForm;
