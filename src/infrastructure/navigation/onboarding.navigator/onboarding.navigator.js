import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../../screens/login/login-screen";
import SignUpScreen from "../../../screens/sign-up/sign-up";

const Stack = createNativeStackNavigator();
const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
