import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../../screens/splash/splash-screen";

const Stack = createNativeStackNavigator();

const EntryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};

export default EntryNavigator;
