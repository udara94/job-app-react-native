import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/home/home-screen";
import ProfileScreen from "../../../screens/profile/profile";
import JobSearch from "../../../screens/search/search";
import JobDetails from "../../../screens/job-details/job-details";
import { COLORS, icons, images } from "../../../constants";
import { ScreenHeaderBtn } from "../../../components";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import SplashScreen from "../../../screens/splash/splash-screen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => navigation.push("Profile")}
            />
          ),
          headerTitle: "",
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
