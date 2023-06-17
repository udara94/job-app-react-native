import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/home/home-screen";
import ProfileScreen from "../../../screens/profile/profile";
import JobSearch from "../../../screens/search/search";
import JobDetails from "../../../screens/job-details/job-details";
import { icons } from "../../../constants";
import { ScreenHeaderBtn } from "../../../components";
import DrawerNavigator from "../drawer.navigator/drawer.navigator";
import useTheme from "../../../hook/useTheme";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: theme.bg.primary },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => navigation.pop()}
            />
          ),
        })}
        name="search"
        component={JobSearch}
      />
      <Stack.Screen
        name="job-details"
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: theme.bg.primary },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => navigation.pop()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        })}
        component={JobDetails}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: theme.bg.primary },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => navigation.pop()}
            />
          ),
          headerTitle: "",
        })}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
