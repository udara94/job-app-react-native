import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";


const styles = StyleSheet.create({
    searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    ...SHADOWS.medium,
    shadowColor: COLORS.primary,
   }
})

export default styles;