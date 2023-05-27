import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";


const styles = StyleSheet.create({
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
        justifyContent: "center",
        backgroundColor: COLORS.black,
        borderRadius: SIZES.medium,
        alignItems: "center",
        color: COLORS.white,
        fontWeight: 'bold'
       },
       searchWrapper:{
        flex: 1,
        backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
        ...SHADOWS.medium,
        shadowColor: COLORS.primary,
       },
       labelContainer: {
        backgroundColor: COLORS.black, // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -9, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    inputContainer: {
        borderWidth: 1, // Create border
        borderRadius: 8, // Not needed. Just make it look nicer.
        padding: 8, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "red"
    },
    parent: {
        marginTop: SIZES.xLarge,
        marginBottom: SIZES.xLarge
    },
    fieldName:{
        fontSize: 10,
        color: COLORS.white
    }
})

export default styles;