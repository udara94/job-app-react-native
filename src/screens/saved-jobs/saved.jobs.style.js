import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = (theme) =>
  StyleSheet.create({
    cardsContainer: {
      // marginTop: SIZES.medium,
      gap: SIZES.small,
      margin: SIZES.medium
    },
    container: {
      flex: 1,
      marginTop: SIZES.xLarge,
    },
    safeArea: {
      flex: 1, 
      backgroundColor: theme.bg.primary
    },
  });

export default styles;
