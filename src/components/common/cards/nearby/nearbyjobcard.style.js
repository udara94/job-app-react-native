import { StyleSheet } from "react-native";

import { SHADOWS, SIZES } from "../../../../constants";

const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: theme.card.primary,
    ...SHADOWS.medium,
    shadowColor: theme.bg.primary,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor:  theme.bg.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: theme.text.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: theme.text.label,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
