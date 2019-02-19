import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, PanResponder } from 'react-native';

const { width } = Dimensions.get('window');

class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    // this.gestureDelay = 35;
    this.scrollViewEnabled = true;

    let delay = true;
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        if (!delay || Math.abs(gestureState.dx) > 10) {
          if (gestureState.dx > 0 && this.state.left) {
            this.setState({left: false});
          } else if (gestureState.dx < 0 && !this.state.left) {
            this.setState({left: true});
          }
          this.setScrollViewEnabled(false);
          let newX = gestureState.dx;
          position.setValue({ x: newX, y: 0 });
          delay = false;
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 150) {
          Animated.timing(this.state.position, {
            toValue: { x: width, y: 0 },
            duration: 300,
          }).start(() => {
            this.props.success(this.props.text);
            this.setScrollViewEnabled(true);
            delay = true;
          });
        } else if (gestureState.dx < -150) {
          Animated.timing(this.state.position, {
            toValue: { x: -width, y: 0 },
            duration: 300,
          }).start(() => {
            this.props.success(this.props.text);
            this.setScrollViewEnabled(true);
            delay = true;
          });
        } else {
          Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 },
            duration: 150,
          }).start(() => {
            this.setScrollViewEnabled(true);
            delay = true;
          });
        }
      },
    });

    this.panResponder = panResponder;
    this.state = {
      position,
      left: true,
    };
  }

  setScrollViewEnabled(enabled) {
    if (this.scrollViewEnabled !== enabled) {
      this.props.setScrollEnabled(enabled);
      this.scrollViewEnabled = enabled;
    }
  }

  render() {
    const { left } = this.state;
    const style = left ? styles.left : styles.right;

    return (
      <View style={[styles.listItem, style]}>
        <Animated.View style={[this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
          <View style={styles.absoluteCell}>
            <Text style={styles.absoluteCellText}>DELETE</Text>
          </View>
          <View style={styles.innerCell}>
            <Text>
              {this.props.text}
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 80,
    marginLeft: -100,
    justifyContent: 'center',
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  absoluteCellText: {
    margin: 16,
    color: '#FFF',
  },
  innerCell: {
    width: width,
    height: 80,
    marginLeft: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    backgroundColor: 'red',
  },
  right: {
    backgroundColor: 'green',
  }
});

export default ListItem;
