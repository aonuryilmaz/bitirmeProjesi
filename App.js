import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import Root from './src/main';
import firebase from 'firebase';
import { Bubbles } from 'react-native-loader';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      isReady:false
    };
  }
  async componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    firebase.initializeApp({
      apiKey: "AIzaSyAoTjALVLDpUGmNo_aLZpDT8UVXh6yEBvs",
      authDomain: "bitirme-react.firebaseapp.com",
      databaseURL: "https://bitirme-react.firebaseio.com",
      projectId: "bitirme-react",
      storageBucket: "bitirme-react.appspot.com",
      messagingSenderId: "826895420034"
    })
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isReady:true});
    },3000)
  }
  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <Bubbles size={20} color="#4A4A4A" />
        </View>
      );
    }
    return <Root {...this.props} />;    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});