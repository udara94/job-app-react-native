import { useState } from "react";
import { SafeAreaView, ScrollView, Switch, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";
import { useSelector } from "react-redux";
import { Nearbyjobs, Popularjobs, Welcome } from "../../components";
import { EventRegister } from "react-native-event-listeners"
import { useContext } from "react";
import ThemeContext from "../../context/theme.context";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg.primary }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
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
          onValueChange={(value)=> {
            setDarkMode(value);
            EventRegister.emit("ChangeTheme", value)
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
