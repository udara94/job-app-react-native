import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
// import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { useSelector } from "react-redux";
import useThemedStyles from "../../../hook/useThemedStyles";
import useTheme from "../../../hook/useTheme";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({searchTerm, setSearchTerm, handleClick, navigation}) => {
  // const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const currentUser = useSelector((state)=> state.user.currentUser);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View>
      <View style={style.container}>
        <Text style={style.userName}>Hello {currentUser.firstName}</Text>
        <Text style={style.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={style.searchContainer}>
        <View style={style.searchWrapper}>
          <TextInput
            style={style.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
            placeholderTextColor={theme.text.label}
          />
        </View>
        <TouchableOpacity style={style.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={style.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={style.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={style.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                navigation.navigate("search",{term: searchTerm})
              }}
            >
              <Text style={style.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
