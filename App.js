import React from "react";
import Setup from "./src/boot/setup";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJtw7QQkoj-cDRuHq44fQJn_7ZnG-1q0c",
  authDomain: "firstreactapp-34eb5.firebaseapp.com",
  databaseURL: "https://firstreactapp-34eb5.firebaseio.com",
  storageBucket: "firstreactapp-34eb5.appspot.com",
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  render() {
    return <Setup />;
  }
}

export default App;
