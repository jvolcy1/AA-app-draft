/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
*/

import React from "react";
import { AppRegistry } from "react-native";
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./src/pages/home";
/*
import LoginPage from "./src/pages/login";
import ContactPage from "./src/pages/contact";
import AddContactPage from "./src/pages/addContact";
import AddNotePage from "./src/pages/addNote";
import NotePage from "./src/pages/note";
*/
import store from "./src/redux/store";
import { name as appName } from "./app.json";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomePage}/>
        </Stack.Navigator>
        </NavigationContainer>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
