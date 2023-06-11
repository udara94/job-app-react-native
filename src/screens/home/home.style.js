import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";


const styles = theme => StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: theme.bg.primary
  },
  container: {
    flex: 1,
    padding: SIZES.medium,
  }
  
});

export default styles;
