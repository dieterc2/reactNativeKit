/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from './js/index';

export default class ReactKickStart extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('ReactKickStart', () => ReactKickStart);
