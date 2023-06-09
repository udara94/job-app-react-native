import { COLORS, icons, images, SIZES } from "../../../constants";
import { useSelector } from "react-redux";
import { ScreenHeaderBtn } from "../../../components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../../screens/home/home-screen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer">
      <Drawer.Screen
        name="HomeDrawer"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
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
        })}
      />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreenTest} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
