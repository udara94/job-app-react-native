import { icons, images, SIZES } from "../../../constants";
import { useSelector } from "react-redux";
import { ScreenHeaderBtn } from "../../../components";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "../../../screens/home/home-screen";
import useTheme from "../../../hook/useTheme";
import { auth } from "../../../../firebase";
import { signOut } from "firebase/auth";
import SavedJobs from "../../../screens/saved-jobs/saved-jobs";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const theme = useTheme();
  return (
    <Drawer.Navigator 
    initialRouteName="Home"
    drawerContent={(props)=>{
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}/>
          <DrawerItem label={"logout"} onPress={()=>{
            signOut(auth);
          }}/>
        </DrawerContentScrollView>
      )
    }}
    >
      <Drawer.Screen
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
        })}
      />
      <Drawer.Screen
      name="Saved Jobs"
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
        headerTitleStyle:{
          color: theme.text.primary
        }
      })}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
