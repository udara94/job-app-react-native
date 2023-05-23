
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

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
    text: {
      color: COLORS.white,
      fontSize: 16,
    },
  });
  
  export default styles;