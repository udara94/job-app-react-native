import { StyleSheet } from "react-native";
import { FONT, SIZES, SHADOWS } from "../../../constants";


const styles = theme => StyleSheet.create({
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
        justifyContent: "center",
        backgroundColor: theme.bg.primary,
        borderRadius: SIZES.medium,
        alignItems: "center",
        color: theme.text.primary,
        fontWeight: 'bold'
       },
       searchWrapper:{
        flex: 1,
        backgroundColor: theme.bg.inverse,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
        ...SHADOWS.medium,
        shadowColor: theme.text.inverse,
       },
       labelContainer: {
        backgroundColor: theme.bg.primary, // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
       // elevation: 1, // Needed for android
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
        borderColor: theme.ui.primary
    },
    parent: {
        marginTop: SIZES.xLarge,
        marginBottom: SIZES.xLarge
    },
    fieldName:{
        fontSize: 10,
        color: theme.text.primary
    }
})

export default styles;