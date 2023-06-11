import { StyleSheet } from "react-native";

import { FONT, SIZES } from "../../../constants";

const styles = theme => StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: theme.text.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: theme.text.label,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
