import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { Container, Content } from 'native-base';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    console.log('COMPONENT HOME MOUNTED!');
  }

  render() {
    console.log(Platform.OS);

    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text>Home Page</Text>
            <Button
              title="Go to Profile"
              onPress={() => this.props.navigation.navigate('Profile', { otherParam: 'Profile' })}
            />
          </View>
        </Content>
      </Container>
    );
  }
};

export default Home;
