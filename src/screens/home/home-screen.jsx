import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";
import { useSelector } from "react-redux";
import { Nearbyjobs, Popularjobs, Welcome } from "../../components";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
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

          <Popularjobs navigation={navigation} />
          <Nearbyjobs navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
