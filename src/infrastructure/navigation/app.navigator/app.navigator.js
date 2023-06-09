import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/home/home-screen";
import ProfileScreen from "../../../screens/profile/profile";
import JobSearch from "../../../screens/search/search";
import JobDetails from "../../../screens/job-details/job-details";
import { COLORS, icons } from "../../../constants";
import { ScreenHeaderBtn } from "../../../components";
import DrawerNavigator from "../drawer.navigator/drawer.navigator";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
        name="search"
        component={JobSearch}
      />
      <Stack.Screen
        name="job-details"
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: true,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
        component={JobDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
