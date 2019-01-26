

import React, {Component} from 'react';
import {Platform, StyleSheet, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Image
      source={require('./src/bg.jpg')}
      style={styles.imagestyle}
      blurRadius={Platform.OS=='ios'?10:5}
      >



      </Image>
    );
  }
}

const styles = StyleSheet.create({
  imagestyle:{
    flex:1,
    width:null,
    height:null
  }

});
