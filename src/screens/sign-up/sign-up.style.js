import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    ...SHADOWS.medium,
    shadowColor: COLORS.primary,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: SIZES.large,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    backgroundColor: "#4286f4",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  signUpText: {
    margin: SIZES.large,
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  signUpView:{
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
  },
  buttonView:{
    marginTop: SIZES.large
  }
});

export default styles;
