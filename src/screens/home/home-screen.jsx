import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Switch,
  View,
} from "react-native";
import { Nearbyjobs, Popularjobs, Welcome } from "../../components";
import { EventRegister } from "react-native-event-listeners";
import styles from "./home.style";
import useThemedStyles from "../../hook/useThemedStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const style = useThemedStyles(styles);

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Welcome
            navigation={navigation}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                navigation.navigate("search", { term: searchTerm });
              }
            }}
          />
          <Switch
            onValueChange={(value) => {
              setDarkMode(value);
              AsyncStorage.setItem('darkMode', JSON.stringify(value));
              EventRegister.emit("ChangeTheme", value);
            }}
            value={darkMode}
          />
          <Popularjobs navigation={navigation} />
          <Nearbyjobs navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
