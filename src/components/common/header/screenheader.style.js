import { StyleSheet } from "react-native";

import { SIZES } from "../../../constants";

const styles = theme =>StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: theme.common.primary,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
