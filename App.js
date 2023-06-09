import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { ThemeProvider } from "styled-components/native";
import { NavigationContextProvider } from "./src/context/navigation.context";
import { Navigation } from "./src/infrastructure/navigation";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import ThemeContext from "./src/context/theme.context";
import theme from "./src/infrastructure/theme/theme";

const App = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("./src/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./src/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./src/assets/fonts/DMSans-Regular.ttf"),
  });

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
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
    <ThemeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <NavigationContextProvider>
          <Navigation />
        </NavigationContextProvider>
      </Provider>
    </ThemeContext.Provider>
  );
};

registerRootComponent(App);
export default App;
