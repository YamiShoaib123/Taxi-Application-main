//import liraries
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation'
import Login from './src/pages/login/login';
const App = () => {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
