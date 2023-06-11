import { StyleSheet } from "react-native";

import { SIZES } from "../../constants";

const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.bg.primary
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  signUpText: {
    margin: SIZES.large,
    color: theme.text.primary,
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
