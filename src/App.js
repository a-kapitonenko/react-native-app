import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import store from './configureStore';
import { Container, Content } from 'native-base';
import FooterContainer from './screens/Footer/FooterContainer';

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Content>
          <View style={style.container}>
            <Text>Quis edsadsadnim nulla laborum veniam culpa tempor ea dolore ex ad.</Text>
          </View>
        </Content>
        <FooterContainer />
      </Container>
    </Provider>
  );
};

export default App;
