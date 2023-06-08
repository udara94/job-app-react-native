import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContextProvider } from "./src/context/navigation.context";
import { Navigation } from "./src/infrastructure/navigation";

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
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
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
