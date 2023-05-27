
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       // justifyContent: 'space-between',
        padding: 20,
        backgroundColor: COLORS.black
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
        color: COLORS.white,
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
      button: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
        backgroundColor: COLORS.black,
        opacity: 0.5,
       // marginBottom: 20,
      },
      imageContainer: {
        alignItems: 'center',
        justifyContent:"center"
      },
  });

  export default styles;
  