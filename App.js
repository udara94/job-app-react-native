import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/home/home-screen";
import LoginScreen from "./src/screens/login/login-screen";
import SplashScreen from "./src/screens/splash/splash-screen";
import { useFonts } from "expo-font";
import { COLORS, icons, images } from "./src/constants";
import { ScreenHeaderBtn } from "./src/components";
import JobSearch from "./src/screens/search/search";
import JobDetails from "./src/screens/job-details/job-details";
import { registerRootComponent } from 'expo';
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Provider } from "react-redux";
import { store } from "./src/store"

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("./src/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./src/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./src/assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={()=>{
                signOut(auth).then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  });
              }} />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "",
          }}
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
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};


registerRootComponent(App);
export default App;

