import React from "react";
import { AppRegistry } from "react-native";
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./src/pages/home";
import store from "./src/redux/store";
import { name as appName } from "./app.json";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="Login" component={LoginPage}/>
        </Stack.Navigator>
        </NavigationContainer>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
