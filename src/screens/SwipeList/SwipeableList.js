import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

class SwipeList extends React.Component {
  state = {
    enable: true,
    data: this.props.data,
  };

  renderSeparator = () => {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  }

  setScrollEnabled = (enable) => {
    this.setState({
      enable: enable
    });
  }

  onSuccess = (key) => {
    const data = this.state.data.filter(item => item.key !== key);

    this.setState({ data });
  }

  renderItem = (item) => {
    return (
      <ListItem
        text={item.key}
        success={this.onSuccess}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
      />
    );
  }

  render() {
    return (
      <FlatList
        style={this.props.style}
        data={this.state.data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({item}) => this.renderItem(item)}
        scrollEnabled={this.state.enable}
      />
    );
  }
}

const styles = StyleSheet.create({
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  separatorStyle: {
    height: 1,
    backgroundColor: '#000',
  },
});

export default SwipeList;
