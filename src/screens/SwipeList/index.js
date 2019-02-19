
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwipeableList from './SwipeableList';
import listData from './Data';

class SwipeFlatList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SwipeableList style={styles.list} data={listData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  list: {
    flex: 1,
    marginTop: 32,
  },
});

export default SwipeFlatList;
