import React from 'react';
import { View, Text, Button, Switch, TextInput, StyleSheet } from 'react-native';

class Edit extends React.Component {
  state = {
    value: true,
  };

  onChangeValue = (newValue) => {
    this.setState({
      value: newValue
    });
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitle: () => <View><Text>Tittle</Text></View>,
    headerLeft: <></>,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    const { value } = this.state;

    return (
      <View>
        <Switch
          value={value}
          onValueChange={this.onChangeValue}
        />
        <Text>Edit Page</Text>
        <TextInput
          style={styles.textView}
          placeholder="City"
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textView: {
    fontSize: 50,
    height: 100,
    width: 300,
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    margin: 10
  }
});

export default Edit;
