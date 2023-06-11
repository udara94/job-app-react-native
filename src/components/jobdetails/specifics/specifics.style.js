import { StyleSheet } from "react-native";

import { FONT, SIZES } from "../../../constants";

const styles = theme => StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: theme.bg.primary,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    color: theme.text.primary,
    fontFamily: FONT.bold,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: theme.text.label,
    marginTop: 6,
  },
  pointText: {
    fontSize: SIZES.medium - 2,
    color: theme.text.label,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  },
});

export default styles;
