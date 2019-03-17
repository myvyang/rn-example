import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useScreens } from 'react-native-screens';
import { SafeAreaView } from 'react-navigation';
import { AppLoading, Asset, Font } from 'expo';
import RootNavigation from './navigation/RootNavigation.js';

// workaround for large android status bar in react-nav beta.27
if (Platform.OS === 'android') {
  useScreens();
  SafeAreaView.setStatusBarHeight(0);
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default class App extends React.Component {

  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
