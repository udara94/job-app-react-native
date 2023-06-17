import { View, Image } from "react-native";
import React, { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseDB } from "../../../firebase";
import styles from "./splash.style";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/userSlice";
import { NavigationContext } from "../../context/navigation.context";
import { NavigationStatus } from "../../enums/navigation-status.enum";
import { COLORS } from "../../constants";
import useTheme from "../../hook/useTheme";
import { getUserDetails } from "../../services/firebase.service";

export default function SplashScreen({ navigation }) {
  //const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { onNavigationStausChange } = useContext(NavigationContext);
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const loadData = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docSnap = await getUserDetails(user);
        if (docSnap.exists()) {
          dispatch(userSlice.actions.setCurrentUser(docSnap.data()));
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        onNavigationStausChange(NavigationStatus.Authenticated);
      } else {
        onNavigationStausChange(NavigationStatus.NotAuthenticatd);
      }
    });
  };
  return (
    <View style={styles.container(theme.bg.primary)}>
      <Image
        source={require("../../../src/assets/images/job-logo.png")}
        style={styles.image}
      />
    </View>
  );
}
