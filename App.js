import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { NavigationContextProvider } from "./src/context/navigation.context";
import { Navigation } from "./src/infrastructure/navigation";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import ThemeProvider from "./src/context/theme.context";
import theme from "./src/infrastructure/theme/theme";
import { COLORS } from "./src/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("./src/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./src/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./src/assets/fonts/DMSans-Regular.ttf"),
  });

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("darkMode", (err, value) => {
      if (err) {
        console.log(err);
      } else {
        if (value != null) {
          setDarkMode(JSON.parse(value));
        }
      }
    });
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={darkMode === true ? theme.dark : theme.light}>
      <StatusBar
        barStyle={darkMode ? "light-content" : "dark-content"}
        backgroundColor={darkMode ? COLORS.black : COLORS.white}
      />
      <Provider store={store}>
        <NavigationContextProvider>
          <Navigation />
        </NavigationContextProvider>
      </Provider>
    </ThemeProvider>
  );
};

registerRootComponent(App);
export default App;
