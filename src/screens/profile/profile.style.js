
import { StyleSheet } from "react-native";

const styles = theme => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       // justifyContent: 'space-between',
        padding: 20,
        backgroundColor: theme.bg.primary
      },
      profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
       // marginBottom: 20,
      },
      name: {
        color: theme.text.primary,
        fontSize: 24,
        fontWeight: 'bold',
      },
      infoContainer: {
        alignItems: 'center',
      },
      email: {
        fontSize: 16,
        marginBottom: 10,
      },
      mobile: {
        fontSize: 16,
        marginBottom: 20,
      },
      actionButton:{
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        marginBottom: 20
      },
      btnImg: (dimension) => ({
        //borderRadius: SIZES.small / 1.25,
        width: 100,
        height: 100,
        //borderRadius: 75,
        //marginBottom: 20,
      
      }),
      btnContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
        zIndex:1,
        position:"absolute",
        backgroundColor: theme.ui.quaternary,
        opacity: 0.5,
       // marginBottom: 20,
      },
      imageContainer: {
        alignItems: 'center',
        justifyContent:"center"
      },
      bottomContainer: (width, height)=>({
        flex: 2,
        padding: 24,
        backgroundColor: "transparent",
        width: width,
        height: height,
        zIndex:1,
        position:"absolute",
      }),
      contentContainer: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: "transparent",
      },
  });

  export default styles;
  