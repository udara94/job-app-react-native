import { StyleSheet } from "react-native";

import { FONT, SIZES } from "../../../constants";

const styles = theme => StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: theme.bg.primary,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headText: {
    fontSize: SIZES.large,
    color: theme.text.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: theme.text.label,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
