/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { handleFbLogin } from './lib/auth';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={handleFbLogin}
        title="Sign in with facebook"
        color="#3c50e8"
      />
      </View>
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
