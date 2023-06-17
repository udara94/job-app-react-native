import { icons, images, SIZES } from "../../../constants";
import { useSelector } from "react-redux";
import { ScreenHeaderBtn } from "../../../components";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer as PaperDrawer, TouchableRipple } from "react-native-paper";
import HomeScreen from "../../../screens/home/home-screen";
import useTheme from "../../../hook/useTheme";
import { auth } from "../../../../firebase";
import { signOut } from "firebase/auth";
import SavedJobs from "../../../screens/saved-jobs/saved-jobs";
import styles from "./drawer.style";
import useThemedStyles from "../../../hook/useThemedStyles";
import { useState } from "react";
import { Image, Switch, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventRegister } from "react-native-event-listeners";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [imageUrl, setImageUrl] = useState(currentUser.imageUrl);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const style = useThemedStyles(styles);

  useEffect(()=>{
    AsyncStorage.getItem("darkMode", (err, value) => {
      if (err) {
        console.log(err);
      } else {
        if (value != null) {
          setDarkMode(JSON.parse(value));
        }
      }
    });
  });
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} style={style.container}>
              <View>
                <View style={style.imageContainer}>
                  {imageUrl != null && imageUrl != "" ? (
                    <Image
                      source={{ uri: imageUrl }}
                      style={style.profilePicture}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/images/job-logo.png")}
                      style={styles.profilePicture}
                    />
                  )}
                </View>

                <Text style={style.name}>
                  {firstName} {lastName}
                </Text>
              </View>

              <DrawerItemList {...props} />
              <TouchableRipple>
                <View style={style.preference}>
                  <Text style={style.darkThemeText}>Dark Theme</Text>
                  <Switch
                    onValueChange={(value) => {
                      setDarkMode(value);
                      AsyncStorage.setItem("darkMode", JSON.stringify(value));
                      EventRegister.emit("ChangeTheme", value);
                    }}
                    value={darkMode}
                  />
                </View>
              </TouchableRipple>
            </DrawerContentScrollView>
            {/* <PaperDrawer.Section title="" style={style.darkTheme}>
              
            </PaperDrawer.Section> */}
            <PaperDrawer.Section 
            style={style.bottomDrawerSection}
            showDivider={false}>
              <DrawerItem
                activeBackgroundColor={theme.text.primary}
                activeTintColor={theme.text.dark}
                inactiveTintColor={theme.text.primary}
                inactiveBackgroundColor={theme.drawer.primary}
                // style={{backgroundColor: theme.text.inverse}}
                // labelStyle={{color: theme.text.inverse}}
                label={"logout"}
                onPress={() => {
                  signOut(auth);
                }}
              />
            </PaperDrawer.Section>
          </View>
        );
      }}
    >
      <Drawer.Screen
        label="Home"
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: theme.bg.primary,
          },
          headerLeftContainerStyle: {
            padding: 15,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRightContainerStyle: {
            padding: 15,
          },
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={
                currentUser.imageUrl
                  ? { uri: currentUser.imageUrl }
                  : images.profile
              }
              dimension="100%"
              handlePress={() => navigation.push("Profile")}
            />
          ),
          headerTitle: "",
          drawerLabel: "Home",
          drawerActiveBackgroundColor: theme.text.primary,
          drawerActiveTintColor: theme.text.dark,
          drawerInactiveBackgroundColor: theme.drawer.primary,
          drawerInactiveTintColor: theme.text.primary,
        })}
      />
      <Drawer.Screen
        name="SavedJobs"
        component={SavedJobs}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: theme.bg.primary,
          },
          headerLeftContainerStyle: {
            padding: 15,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRightContainerStyle: {
            padding: 15,
          },
          headerTitle: "Saved Jobs",
          headerTitleStyle: {
            color: theme.text.primary,
          },
          drawerLabel: "Saved Jobs",
          drawerActiveBackgroundColor: theme.text.primary,
          drawerActiveTintColor: theme.text.dark,
          drawerInactiveBackgroundColor: theme.drawer.primary,
          drawerInactiveTintColor: theme.text.primary,
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
