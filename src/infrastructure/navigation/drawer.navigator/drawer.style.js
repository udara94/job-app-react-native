import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = (theme) =>
  StyleSheet.create({
    profilePicture: {
      width: 150,
      height: 150,
      borderRadius: 75,
      // marginBottom: 20,
    },
    imageContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    name: {
      color: theme.drawer.secondary,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: SIZES.xLarge,
      marginBottom: SIZES.xLarge,
    },
    container: {
      backgroundColor: theme.drawer.primary,
    },
    bottomDrawerSection: {
      // marginBottom: 15,
      borderTopColor: "#f4f4f4",
      borderTopWidth: 1,
      backgroundColor: theme.drawer.primary,
    },
    darkTheme: {
      backgroundColor: theme.drawer.primary,
    },
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      //paddingVertical: 12,
      paddingHorizontal: 16,
    },
    darkThemeText: {
      fontWeight: "bold",
      paddingTop: 10,
      color: theme.text.primary,
    },
  });

export default styles;
