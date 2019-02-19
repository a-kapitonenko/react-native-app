import React from 'react';
import { View, WebView, StyleSheet, Dimensions } from 'react-native';
import { Button, Text } from 'native-base';
const { width, height } = Dimensions.get('window');

const WebViewExample = () => {
  let webref;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.aaa}>
        <Button
          onPress={() => webref.goBack()}
        >
          <Text>Back</Text>
        </Button>
        </View>
      </View>
      <WebView
        ref={node => webref = node}
        source={{
          uri: 'https://models.com/register'
        }}
        startInLoadingState
        // onNavigationStateChange={(webViewState) =>{
        //   for (key in webViewState) {
        //     console.log(`KEY = ${key}, VALUE = ${webViewState[key]}`);
        //   }
        // }}
      />
    </View>
  )
}

export default WebViewExample;

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  main: {
    width: width,
    position: 'relative',
    marginTop: 20
  },
  aaa: {
    zIndex: 1000,
    top: 0,
    position: 'absolute',
    backgroundColor: 'red',
    width: '100%',
    height: 50,
  }
})

// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// class ModalExample extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// export default ModalExample;

// import React from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';

// import CardFlip from 'react-native-card-flip';
// import { Button } from 'native-base';


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <CardFlip
//           style={styles.cardContainer}
//           ref={(card) => this.card = card}
//           duration={1000}
//           flipZoom={0.09}
//           perspective={1500}
//         >
//           <View activeOpacity={0.5} style={[styles.card, styles.card1]}>
//             <Button onPress={() => this.card.flip()}>
//               <Text>sdsdsd</Text>
//             </Button>
//           </View>
//           {/* <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
//             <Text style={styles.label}>AB</Text>
//           </TouchableOpacity> */}
//           <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
//             <Text style={styles.label}>CD</Text>
//           </TouchableOpacity>
//         </CardFlip>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   cardContainer:{
//     width: 320,
//     height: 470,
//   },
//   card:{
//     width: 320,
//     height: 470,
//     backgroundColor: '#FE474C',
//     borderRadius: 5,
//     shadowColor: 'rgba(0,0,0,0.5)',
//     shadowOffset: {
//       width: 0,
//       height: 1
//     },
//     shadowOpacity:0.5,
//   },
//   card1: {
//     backgroundColor: '#FE474C',
//   },
//   card2: {
//     backgroundColor: '#FEB12C',
//   },
//   label: {
//     lineHeight: 470,
//     textAlign: 'center',
//     fontSize: 55,
//     fontFamily: 'System',
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
// });

// class Profile extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('otherParam', 'A Nested Details Screen'),
//     };
//   };

//   componentDidMount() {
//     console.log('COMPONENT PROFILE MOUNTED!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             { key: 'Devin' },
//             { key: 'Jackson' },
//             { key: 'James' },
//             { key: 'Joel' },
//             { key: 'John' },
//             { key: 'Jillian' },
//             { key: 'Jimmy' },
//             { key: 'Julie' },
//           ]}
//           renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
//         />
//         <Button
//           title="Update the title"
//           onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
//         />
//       </View>
//     );
//   }
// };

// export default Profile;
