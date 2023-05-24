
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       // justifyContent: 'space-between',
        padding: 20,
      },
      profileContainer: {
        alignItems: 'center',
      },
      profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
      },
      name: {
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
      }
  });

  export default styles;
  