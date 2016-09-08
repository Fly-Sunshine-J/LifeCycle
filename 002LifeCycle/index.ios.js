/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';


import FullLifeCycle from './fulllifecycle';

class LifeCycle extends Component {
  render() {
    return (
        <FullLifeCycle/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('LifeCycle', () => LifeCycle);
