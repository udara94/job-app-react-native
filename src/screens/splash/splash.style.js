
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: (backgroundColor) => ({
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor,
    }),
    image: {
      width: 250,
      height: 250,
    },
  });
  
  export default styles;