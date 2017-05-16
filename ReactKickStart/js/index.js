import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.headerBox}>
        <Text style={styles.header}>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'blue'
  },
  headerBox: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: 'powderblue',
    alignItems: 'center'
  }
});
