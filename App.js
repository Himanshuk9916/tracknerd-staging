import React from "react";
import { View, Text } from 'react-native';
import Login from "./src2/screens/Login/Login";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from "./src2/screens/List/List";
import Map from "./src2/screens/Map";

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} headerShown={false} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}