import { View, Image } from "react-native";
import React, { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseDB } from "../../../firebase";
import styles from "./splash.style";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/userSlice";
import { NavigationContext} from "../../context/navigation.context";
import { NavigationStatus } from "../../enums/navigation-status.enum";
import { COLORS } from "../../constants";

export default function SplashScreen({ navigation }) {
  //const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const {onNavigationStausChange} = useContext(NavigationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await getUserDetails(user)
          onNavigationStausChange(NavigationStatus.Authenticated);
        } else {
          onNavigationStausChange(NavigationStatus.NotAuthenticatd);
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const getUserDetails = async (user) => {
    const docRef = doc(firebaseDB, "Users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(userSlice.actions.setCurrentUser(docSnap.data()))
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <View style={styles.container(COLORS.black)}>
      <Image
        source={require("../../../src/assets/images/job-logo.png")}
        style={styles.image}
      />
    </View>
  );
}
