import { StyleSheet } from "react-native";

import { FONT, SIZES, SHADOWS } from "../../../constants";


const styles = theme => StyleSheet.create({
    searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.large,
    color: theme.text.primary
   },
   searchContainer:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    marginBottom: SIZES.large,
    height: 50,
   },
   searchWrapper:{
    flex: 1,
    backgroundColor: theme.bg.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    ...SHADOWS.medium,
    shadowColor: theme.text.primary,
   }
})

export default styles;