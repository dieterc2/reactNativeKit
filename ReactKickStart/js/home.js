import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Container, Header, Left, Icon, Body, Title, Button, Right, Content, Footer, FooterTab } from 'native-base';

export default class Home extends Component {
  render() {
    return(
      <Text>Hello {this.props.title}</Text>
    );
  }
}
