import React, { useContext } from "react";
import { NavigationContext } from "../../context/navigation.context";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStatus } from "../../enums/navigation-status.enum";
import EntryNavigator  from "./entry.navigator/entry.navigator";
import OnboardingNavigator  from "./onboarding.navigator/onboarding.navigator";
import AppNavigator from "./app.navigator/app.navigator";

export const Navigation = () => {
  const { navigationStatus } = useContext(NavigationContext);
  return (
    <NavigationContainer>
      {navigationStatus === NavigationStatus.Onboarding && <EntryNavigator/>}
      {navigationStatus === NavigationStatus.NotAuthenticatd && (
        <OnboardingNavigator />
      )}
      {navigationStatus === NavigationStatus.Authenticated && <AppNavigator />}
    </NavigationContainer>
  );
};
