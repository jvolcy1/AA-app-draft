import 'react-native-gesture-handler';
import React from "react";
import { AppRegistry } from "react-native";
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FindFlightsPage from "./src/pages/findFlights";
import SelectFlightPage from "./src/pages/selectFlight";
import CheckBagsPage from "./src/pages/checkBags";
import store from "./src/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="FindFlights" component={FindFlightsPage}/>
          <Stack.Screen name="SelectFlight" component={SelectFlightPage}/>
          <Stack.Screen name="CheckBags" component={CheckBagsPage}/>
        </Stack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("QuickWay", () => App);
