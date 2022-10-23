import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultScreen from "./src/screens/ResultScreen";
import ErrorScreen from "./src/screens/ErrorScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
