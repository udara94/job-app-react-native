import { StyleSheet } from "react-native";

const styles = theme => StyleSheet.create({
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: theme.text.inverse,
      fontWeight: 'bold',
    },
  });

export default styles;
  