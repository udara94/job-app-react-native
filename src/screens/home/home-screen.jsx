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

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
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
          <Popularjobs navigation={navigation} />
          <Nearbyjobs navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
