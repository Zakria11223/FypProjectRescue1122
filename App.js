import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './Components/LoginForm';
import SignUp from './Components/SignUp';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default function App() {
  return (
    <View style={styles.container}>
      
      <SignUp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
